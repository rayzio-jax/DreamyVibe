import PropTypes from "prop-types";

SecondSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function SecondSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<h1>Tau ga sih?</h1>
			<img src="src/assets/ya_know.gif" alt="" />
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
