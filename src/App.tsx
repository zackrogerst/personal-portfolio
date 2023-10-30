import "./styles/styles.css";
import "./styles/reset.css";
import "./styles/global-variables.css";

import globalContent from "./content/global.json";
import homepageContent from "./content/homepage.json";

import Header from "./components/header/Header";

function App() {
	return (
		<>
			<Header globalContent={globalContent} />
			<h1>{homepageContent?.hero?.h1}</h1>
		</>
	);
}

export default App;
