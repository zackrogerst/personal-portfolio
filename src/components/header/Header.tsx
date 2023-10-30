import Navigation from "./Navigation";
import { useAppContext } from "../../context/AppContext";

const Header = () => {
	const { globalContent } = useAppContext();

	const { logo, logoType, logoAltText, navigation } = globalContent;
	return (
		<header>
			{logoType === "str" && <p>{logo}</p>}
			{logoType === "img" && <img src={logo} alt={logoAltText} />}
			<Navigation navigationItems={navigation} />
		</header>
	);
};

export default Header;
