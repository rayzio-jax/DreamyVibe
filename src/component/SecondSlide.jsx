import PropTypes from "prop-types";

import "../scss/slides.scss";

SecondSlide.propTypes = {
	slide: PropTypes.shape({
		current: PropTypes.instanceOf(Element),
	}),
	event: PropTypes.func, // Updated to reflect that `event` is a function
};

export default function SecondSlide({ slide, event }) {
	return (
		<div ref={slide} className="container">
			<div className="wrapper">
				<h1>Did you know this?</h1>
				<img src="https://i.ibb.co.com/9NLPS50/ya-know.gif" alt="ya-know" />
			</div>
			<div className="downarrow-icon" onClick={event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
