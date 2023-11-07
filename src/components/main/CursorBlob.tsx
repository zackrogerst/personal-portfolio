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
			document.body.onpointermove = null;
		};
	}, []);

	return (
		<>
			<div id="blob"></div>
		</>
	);
};

export default CursorBlob;
