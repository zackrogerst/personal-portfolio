import "./Header.css";

import Navigation from "./Navigation";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
	const { globalContent } = useAppContext();

	const { logo, logoType, logoAltText } = globalContent;
	return (
		<header>
			{logoType === "str" && <p>{logo}</p>}
			{logoType === "img" && <img src={logo} alt={logoAltText} />}
			<Navigation />
		</header>
	);
};

export default Header;
