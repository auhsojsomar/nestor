import React from "react";
import Carousel from "react-bootstrap/Carousel";
import about from "../assets/img/banner.jpg";

const Hero = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<img src={about} alt="tae" className="d-block w-100" />
			</Carousel.Item>
		</Carousel>
	);
};

export default Hero;
