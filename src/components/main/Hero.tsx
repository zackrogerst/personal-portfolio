import { useAppContext } from "../../context/AppContext";

const Hero = () => {
	const { homepageContent } = useAppContext();

	return <h1>{homepageContent?.hero?.h1}</h1>;
};

export default Hero;
