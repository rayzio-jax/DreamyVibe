import "../scss/slides.scss";
import PropTypes from "prop-types";

SecondSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function SecondSlide(props) {
	return (
		<div ref={props.slide} id="slide2" className="container">
			<h1>Tau ga sih?</h1>
			<img src="src/assets/hello.gif" alt="" />
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
