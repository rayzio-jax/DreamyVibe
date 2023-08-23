import Modal from "./Modal";
import PropTypes from "prop-types";
import $ from "jquery";

FourthSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function FourthSlide(props) {
	$(window).on("load", () => {
		const wrapper = $("#wrapper");
		const noBtn = $("#no-btn");

		noBtn.on("click", () => {
			var maxX = wrapper.width() - noBtn.width();
			var maxY = wrapper.height() - noBtn.height();

			var newX = Math.floor(Math.random() * maxX);
			var newY = Math.floor(Math.random() * maxY);

			$(noBtn).css({
				position: "absolute",
				top: newY + "px",
				left: newX + "px",
			});
		});

		noBtn.on("mouseover", () => {
			var maxX = wrapper.width() - noBtn.width();
			var maxY = wrapper.height() - noBtn.height();

			var newX = Math.floor(Math.random() * maxX) + 1;
			var newY = Math.floor(Math.random() * maxY) + 1;

			$(noBtn).css({
				position: "absolute",
				top: newY + "px",
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
		<div ref={props.slide} id="wrapper" className="container">
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
