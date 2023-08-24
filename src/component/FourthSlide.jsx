import Modal from "./Modal";
import PropTypes from "prop-types";
import $ from "jquery";

import "../scss/slides.scss";

FourthSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function FourthSlide(props) {
	$(window).on("load", () => {
		const wrapper = $(".container");
		const noBtn = $(".no");

		const maxX = wrapper.width() - noBtn.width();
		const maxY = wrapper.height() - noBtn.height();

		console.log("Max wrapper width: ", wrapper.width());
		console.log("Max wrapper height: ", wrapper.height());
		console.log("Max pos width: ", maxX);
		console.log("Max pos height: ", maxY);

		noBtn.on("click", () => {
			let newX = Math.floor(Math.random() * maxX);
			let newY = Math.floor(Math.random() * maxY);

			$(noBtn).css({
				position: "absolute",
				top: newY + "px",
				left: newX + "px",
			});
		});

		noBtn.on("mouseover", async () => {
			let newX = Math.floor(Math.random() * maxX);
			let newY = Math.floor(Math.random() * maxY);

			$(noBtn).css({
				position: "absolute",
				bottom: newY + "px",
				left: newX + "px",
			});
		});

		const modalBg = $(".modal-bg");
		const modalBox = $(".modal");
		const yesBtn = $("#yes-btn");
		const closeBtn = $(".closeBtn");

		yesBtn.on("click", () => {
			modalBg.css({
				display: "block",
				animation: "modalBgShow 0.5s ease-in-out forwards",
			});
			setTimeout(() => {
				modalBox.css({
					display: "block",
					animation: "modalShow 0.5s ease-in-out forwards",
				});
			}, 200);
		});

		closeBtn.on("click", () => {
			// location.reload();
			modalBox.css({
				animation: "modalClose 0.5s ease-in-out forwards",
			});
			setTimeout(() => {
				modalBox.css({
					display: "none",
				});
				modalBg.css({
					animation: "modalBgClose 0.5s ease-in-out forwards",
				});
			}, 500);
			setTimeout(() => {
				modalBg.css({
					display: "none",
				});
			}, 1000);
		});
	});

	return (
		<div ref={props.slide} className="container">
			<h1>Jalan yuk, mau ya?</h1>
			<div className="btn-container">
				<button id="yes-btn" className="button yes">
					Mau
				</button>
				<button id="no-btn" className="button no">
					Gak mau
				</button>
			</div>
			<Modal />
		</div>
	);
}
