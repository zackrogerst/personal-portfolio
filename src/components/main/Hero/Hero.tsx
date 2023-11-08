import "./Hero.css";

import { useAppContext } from "../../../context/AppContext";
import Globe from "./Globe";
import CursorBlob from "../CursorBlob/CursorBlob";

const Hero = () => {
	const { homepageContent } = useAppContext();

	return (
		<>
			<div className="hero">
				<div className="hero-column">
					<Globe />
					<h1>{homepageContent?.hero?.h1}</h1>
				</div>
			</div>
			<CursorBlob />
		</>
	);
};

export default Hero;
