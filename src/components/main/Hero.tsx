import React from "react";

import { HomepageProps } from "../../typeAliases";

const Hero: React.FC<HomepageProps> = ({ homepageContent }) => {
	return <h1>{homepageContent?.hero?.h1}</h1>;
};

export default Hero;
