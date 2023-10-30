import "./styles/styles.css";
import "./styles/reset.css";
import "./styles/global-variables.css";

import globalContent from "./content/global.json";
import homepageContent from "./content/homepage.json";

import Header from "./components/header/Header";
import Hero from "./components/main/Hero";

function App() {
	return (
		<>
			<Header globalContent={globalContent} />
			<Hero homepageContent={homepageContent}/>
		</>
	);
}

export default App;
