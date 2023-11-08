import { useEffect, useState } from "react";

import axios from "axios";
import { marked } from "marked";
import DOMPurify from "dompurify";

import { useAppContext } from "../../../context/AppContext";

import { ApiResponse } from "../../../typeAliases/githubTypeAliases";

function MyWork() {
	const { myWorkContent } = useAppContext();

	const { githubOwner, perPageLimit, githubTopic } = myWorkContent;

	const [loading, setLoading] = useState(true);

	const initialProjectsState: ApiResponse = {
		total_count: 0,
		incomplete_results: false,
		items: []
	};

	const [projects, setProjects] = useState(initialProjectsState);

	function markdownToHTML(markdownString: string): string {
		return marked(markdownString);
	}

	function sanitizeHTML(html: string) {
		return { __html: DOMPurify.sanitize(html) };
	}

	const fetchReadme = async (readmeUrl: string) => {
		return await axios
			.get(readmeUrl)
			.then((res) => {
				return atob(res.data.content);
			})
			.catch((err) => {
				console.log(err);
				return "";
			});
	};

	const filterResponse = (data: any): ApiResponse => {
		return {
			total_count: data.total_count,
			incomplete_results: data.incomplete_results,
			items: data.items.map((repo: any) => ({
				id: repo.id,
				name: repo.name,
				html_url: repo.html_url,
				description: repo.description,
				language: repo.language,
				topics: repo.topics,
				readme: ""
			}))
		};
	};

	const fetchProjects = async () => {
		try {
			const apiUrl = `https://api.github.com/search/repositories?q=user:${githubOwner}+topic:${githubTopic}&per_page=${perPageLimit}`;
			const response = await axios.get(apiUrl);
			const data: ApiResponse = filterResponse(response.data);

			if (data.items && data.items.length > 0) {
				for (let repo of data.items) {
					const readmeUrl = `https://api.github.com/repos/${githubOwner}/${repo.name}/contents/README.md`;
					repo.readme = await fetchReadme(readmeUrl);
				}
				setProjects(data);
				setLoading(false);
			} else {
				console.error("No repositories found.");
			}
		} catch (error) {
			console.log("%c catch", "color: yellow;");
			console.error(`Error fetching data: ${error}`);
		}
	};

	useEffect(() => {
		setLoading(true);
		fetchProjects();
	}, []);

	return (
		<div className="my-projects-row">
			<h2>My Projects</h2>
			{loading ? (
				<p>loading...</p>
			) : (
				<div className="project-cards-container">
					{projects.total_count > 0 ? (
						projects?.items?.map((project) => {
							const { id, name, html_url, description, language, topics, readme } =
								project;
							return (
								<div key={id} className="project-card">
									<h2>{name}</h2>
									<p>{description}</p>
									<p>{language}</p>
									<div>
										<h3>Topics:</h3>
										<ul>
											{topics?.map((topic) => (
												<li key={topic}>{topic}</li>
											))}
										</ul>
									</div>
									<a href={html_url}>See On Github</a>
									<div
										dangerouslySetInnerHTML={sanitizeHTML(
											markdownToHTML(readme)
										)}
									/>
								</div>
							);
						})
					) : (
						<p>No Projects to Display</p>
					)}
				</div>
			)}
		</div>
	);
}

export default MyWork;
