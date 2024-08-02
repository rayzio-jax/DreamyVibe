import Modal from "./Modal";
import $ from "jquery";
import PropTypes from "prop-types";

import "../scss/slides.scss";
import { useState } from "react";
import { useEffect } from "react";

FourthSlide.propTypes = {
	slide: PropTypes.shape({
		current: PropTypes.instanceOf(Element),
	}),
};

export default function FourthSlide({ slide }) {
	const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
	const [buttonPosMode, setButtonPosMode] = useState("relative");
	// eslint-disable-next-line no-unused-vars
	const [modalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		const handleResize = () => {};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleButtonClick = () => {
		const wrapper = $(".container");
		const noBtn = $(".no");

		if (wrapper && noBtn) {
			setButtonPosMode("absolute");
			const maxX = wrapper.width() - noBtn.width();
			const maxY = wrapper.height() - noBtn.height();

			const newX = Math.floor(Math.random() * maxX);
			const newY = Math.floor(Math.random() * maxY);

			setButtonPosition({ top: newY, left: newX });
		}
	};

	const handleButtonMouseOver = () => {
		const wrapper = $(".container");
		const noBtn = $(".no");

		if (wrapper && noBtn) {
			setButtonPosMode("absolute");
			const maxX = wrapper.width() - noBtn.width();
			const maxY = wrapper.height() - noBtn.height();

			const newX = Math.floor(Math.random() * maxX);
			const newY = Math.floor(Math.random() * maxY);

			setButtonPosition({ top: newY, left: newX });
		}
	};

	const handleYesClick = () => {
		setModalVisible(true);
	};

	const handleCloseClick = () => {
		setModalVisible(false);
	};

	return (
		<div ref={slide} className="container">
			<h1>
				Let&#39;s go on a date,
				<br />
				shall we?
			</h1>
			<div className="btn-container">
				<button id="yes-btn" className="button yes" onClick={handleYesClick}>
					Yes (˶ˆᗜˆ˵)
				</button>
				<button
					id="no-btn"
					onClick={handleButtonClick}
					onMouseOver={handleButtonMouseOver}
					className="button no"
					style={{
						position: buttonPosMode,
						top: `${buttonPosition.top}px`,
						left: `${buttonPosition.left}px`,
					}}
				>
					Nuu :(
				</button>
			</div>
			<Modal onClose={handleCloseClick} modalVisible={modalVisible} />
		</div>
	);
}
