import { useRef } from "react";
import FirstSlide from "./component/FirstSlide";
import SecondSlide from "./component/SecondSlide";

export default function App() {
	const ref1 = useRef(null);
	const ref2 = useRef(null);

	const handleClick = (slides) => {
		slides.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<FirstSlide
				slide={ref2}
				event={() => {
					handleClick(ref1);
				}}
			/>
			<SecondSlide
				slide={ref1}
				event={() => {
					handleClick(ref2);
				}}
			/>
		</>
	);
}
