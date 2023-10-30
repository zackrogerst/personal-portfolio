import { useEffect } from "react";
import "./CursorBlob.css";

const CursorBlob = () => {
	useEffect(() => {
		const blob = document.getElementById("blob");

		const handlePointerMove = (event: PointerEvent) => {
			const { clientX, clientY } = event;

			if (blob) {
				const animationFrame = () => {
					blob.style.left = `${clientX}px`;
					blob.style.top = `${clientY}px`;
					requestAnimationFrame(animationFrame);
				};

				requestAnimationFrame(animationFrame);
			}
		};

		document.body.onpointermove = handlePointerMove;

		return () => {
			document.body.onpointermove = null; // Clean up the event handler when the component unmounts
		};
	}, []);

	return (
		<>
			<div id="blob"></div>
			{/* <div id="blob-blur"></div> */}
		</>
	);
};

export default CursorBlob;
