const Globe = () => {
	return (
		<div id="globe">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="75px"
				height="75px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<g transform="rotate(23.5 50 50)">
					<circle
						cx="50"
						cy="50"
						r="43"
						fill="rgba(0, 0, 0, 0)"
						stroke="#333"
						strokeWidth="3"
					></circle>
					<path d="M7 50 L93 50" stroke="#333" strokeWidth="3"></path>
					<ellipse cx="50" cy="50" ry="43" fill="none" stroke="#333" strokeWidth="3">
						<animate
							attributeName="rx"
							repeatCount="indefinite"
							dur="5s"
							keyTimes="0;0.5;1"
							values="43;0;43"
							begin="0s"
						></animate>
					</ellipse>
					<ellipse cx="50" cy="50" ry="43" fill="none" stroke="#333" strokeWidth="3">
						<animate
							attributeName="rx"
							repeatCount="indefinite"
							dur="5s"
							keyTimes="0;0.5;1"
							values="43;0;43"
							begin="-1.4478260869565218s"
						></animate>
					</ellipse>
					<ellipse cx="50" cy="50" ry="43" fill="none" stroke="#333" strokeWidth="3">
						<animate
							attributeName="rx"
							repeatCount="indefinite"
							dur="5s"
							keyTimes="0;0.5;1"
							values="43;0;43"
							begin="-2.8986956521739127s"
						></animate>
					</ellipse>
				</g>
			</svg>
		</div>
	);
};

export default Globe;
