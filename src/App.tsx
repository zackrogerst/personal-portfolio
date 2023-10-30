import "./styles/styles.css";
import "./styles/reset.css";
import "./styles/global-variables.css";

import globalContent from "./content/global.json";
import homepageContent from "./content/homepage.json";

function App() {
	return (
		<>
			<header>
				<p>{globalContent?.logoText || "lorem ipsum"}</p>
				<nav>
					<ul>
						{globalContent?.navigation?.map((elm) => {
							return (
								<li key={elm.id}>
									<a href={elm.slug}>
										{elm.text}
										{elm.parent ? "↓" : ""}
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
			<h1>{homepageContent?.hero?.h1}</h1>
		</>
	);
}

export default App;
