import PropTypes from "prop-types";

import "../scss/slides.scss";

ThirdSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function ThirdSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<div className="wrapper">
				<h1>Kamu wangy banget hehe~</h1>
				<img className="hanako-img" src="smile.gif" alt="" />
			</div>
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
