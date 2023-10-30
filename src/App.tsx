import "./styles/styles.css";
import "./styles/global-variables.css";

import globalContent from "./content/global.json";
import homepageContent from "./content/homepage.json";

import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import { AppContextProvider } from "./context/AppContext";

function App() {
	return (
		<AppContextProvider value={{ globalContent, homepageContent }}>
			<Header />
			<Hero />
			{
				// my work
				// about me
				// contact
				// footer
			}
		</AppContextProvider>
	);
}

export default App;
