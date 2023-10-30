import React from "react";

import { NavigationProps } from "../../typeAliases";

const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
	return (
		<nav>
			<ul>
				{navigationItems?.map((elm) => (
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
