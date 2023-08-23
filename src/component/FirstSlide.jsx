import "../scss/slides.scss";
import PropTypes from "prop-types";

FirstSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function FirstSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<h1>Hei kamu~</h1>
			<img src="src/assets/hello.gif" alt="" />
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
