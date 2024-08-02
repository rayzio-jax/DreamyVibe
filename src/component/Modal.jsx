import "../scss/modal.scss";
import PropTypes from "prop-types";

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	modalVisible: PropTypes.bool.isRequired,
};

export default function Modal({ onClose, modalVisible }) {
	return (
		<div className={`modal-bg ${modalVisible ? "show" : "hide"}`}>
			<div className={`modal ${modalVisible ? "show" : "hide"}`}>
				<div className="content">
					<img
						className="yey-img"
						src="https://i.ibb.co.com/CwL2NYt/yey.gif"
						alt="yay-love-you"
					/>
					<p>
						YAYYY <br />
						LOVE UU MWAHH ♡
					</p>
					<button className="closeBtn" onClick={onClose}>
						X
					</button>
				</div>
			</div>
		</div>
	);
}
