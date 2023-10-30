import { useAppContext } from "../../context/AppContext";

const Navigation = () => {
	const { globalContent } = useAppContext();
	const { navigation } = globalContent;
	
	return (
		<nav>
			<ul>
				{navigation?.map((elm) => (
					<li key={elm.id}>
						<a href={elm.slug}>
							{elm.text}
							{elm.parent ? "↓" : ""}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
