import PropTypes from "prop-types";

import "../scss/slides.scss";

FirstSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function FirstSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<div className="wrapper">
				<h1>Hei kamu~</h1>
				<img src="hello.gif" alt="" />
			</div>
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
