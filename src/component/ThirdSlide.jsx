import PropTypes from "prop-types";

ThirdSlide.propTypes = {
	slide: PropTypes.any,
	event: PropTypes.any,
};

export default function ThirdSlide(props) {
	return (
		<div ref={props.slide} className="container">
			<h1>Kamu wangy banget hehe~</h1>
			<img src="./rayzio-jax/assets/smile.gif" alt="" />
			<div className="downarrow-icon" onClick={props.event}>
				<ion-icon name="chevron-down-circle"></ion-icon>
			</div>
		</div>
	);
}
