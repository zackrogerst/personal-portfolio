import { useAppContext } from "../../context/AppContext";
import Globe from "./Globe";

const Hero = () => {
	const { homepageContent } = useAppContext();

	return (
		<div>
			<Globe />
			<h1>{homepageContent?.hero?.h1}</h1>
		</div>
	);
};

export default Hero;
