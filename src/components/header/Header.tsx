import React from "react";

import { HeaderProps } from "../../typeAliases";

import Navigation from "./Navigation";

const Header: React.FC<HeaderProps> = ({ globalContent }) => {
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
