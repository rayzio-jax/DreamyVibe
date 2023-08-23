import { useRef } from "react";
import FirstSlide from "./component/FirstSlide";
import SecondSlide from "./component/SecondSlide";
import ThirdSlide from "./component/ThirdSlide";
import FourthSlide from "./component/FourthSlide";
import Notification from "./component/Notification";
import Copyright from "./component/Copyright";
import $ from "jquery";

export default function App() {
	$(window).on("load", () => {
		window.scrollTo(0, 0);
		const wrapperNotif = $(".wrapper-notif");
		const notif = $(".notification");
		setTimeout(() => {
			wrapperNotif.css({
				animation: "dialogNotf 0.5s ease-out forwards",
			});
		}, 10000);

		notif.on("click", () => {
			location.reload();
		});
	});

	const ref0 = useRef(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);

	const handleClick = (slides) => {
		slides.current?.scrollIntoView({ behavior: "smooth" });
	};

	function playAudio() {
		const audio = new Audio("./rayzio-jax/assets/dori_2O'CLOCK.mp3");
		audio.loop = true;
		audio.play();
	}

	return (
		<>
			<Notification />
			<FirstSlide
				slide={ref0}
				event={() => {
					playAudio();
					handleClick(ref1);
				}}
			/>
			<SecondSlide
				slide={ref1}
				event={() => {
					handleClick(ref2);
				}}
			/>
			<ThirdSlide
				slide={ref2}
				event={() => {
					handleClick(ref3);
				}}
			/>
			<FourthSlide slide={ref3} />
			<Copyright />
		</>
	);
}
