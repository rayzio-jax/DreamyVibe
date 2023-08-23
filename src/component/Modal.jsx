import "../scss/modal.scss";

export default function Modal() {
	const text = "LOVE U SAYANG <3";
	return (
		<div className="modal-bg">
			<div className="modal">
				<div className="content">
					<img src="src/assets/yey.gif" alt="" />
					<p>{text}</p>
					<button className="closeBtn">X</button>
				</div>
			</div>
		</div>
	);
}
