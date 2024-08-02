import { useEffect, useState } from "react";
import "../scss/notification.scss";

export default function Notification() {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		// Scroll to the top of the page when the component mounts
		window.scrollTo(0, 0);

		// Set a timer to trigger animation after 10 seconds
		const timer = setTimeout(() => {
			setAnimationTriggered(true);
			console.log("notification appeared");
		}, 5000);

		// Clean up the timer if the component unmounts
		return () => clearTimeout(timer);
	}, []);

	const handleNotificationClick = () => {
		window.location.reload();
	};

	return (
		<div className={`wrapper-notif ${animationTriggered ? "animate" : ""}`}>
			<button className="notification" onClick={handleNotificationClick}>
				<p>Restart?</p>
				<div className="check-icon">
					<ion-icon name="checkmark-circle"></ion-icon>
				</div>
			</button>
		</div>
	);
}
