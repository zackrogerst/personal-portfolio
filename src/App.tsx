import "./styles/styles.css";
import "./styles/global-variables.css";

import globalContent from "./content/global.json";
import homepageContent from "./content/homepage.json";
import myWorkContent from "./content/myWork.json";

import Header from "./components/header/Header";
import Hero from "./components/main/Hero";
import { AppContextProvider } from "./context/AppContext";
import MyWork from "./components/main/MyWork";

function App() {
	return (
		<AppContextProvider value={{ globalContent, homepageContent, myWorkContent }}>
			<Header />
			<Hero />
			<MyWork />
			{
				// about me
				// contact
				// footer
			}
		</AppContextProvider>
	);
}

export default App;
