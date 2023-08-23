import PropTypes from "prop-types";

import "../scss/slides.scss";

SecondSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function SecondSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<div className="wrapper">
				<h1>Tau ga sih?</h1>
				<img src="ya_know.gif" alt="" />
			</div>
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
