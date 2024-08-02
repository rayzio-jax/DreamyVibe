import PropTypes from "prop-types";

import "../scss/slides.scss";

FirstSlide.propTypes = {
	slide: PropTypes.shape({
		current: PropTypes.instanceOf(Element),
	}),
	event: PropTypes.func, // Updated to reflect that `event` is a function
};

export default function FirstSlide({ slide, event }) {
	return (
		<div ref={slide} className="container">
			<div className="wrapper">
				<h1>Hey you</h1>
				<img src="https://i.ibb.co.com/sQn8wv5/hello.gif" alt="hello-there" />
			</div>
			<div className="downarrow-icon" onClick={event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
