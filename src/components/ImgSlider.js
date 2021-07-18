import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImgSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<Carousel {...settings}>
			<Wrap>
				<img src='/images/slider-luca.png' alt='luca' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-onward.png' alt='onward' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-soul.png' alt='soul' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-raya.png' alt='raya' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-coco.png' alt='coco' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-vengadores.png' alt='vengadores' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-cruella.png' alt='cruella' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-scale.jpg' alt='scale' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-badag.jpg' alt='badag' />
			</Wrap>
			<Wrap>
				<img src='/images/slider-scales.jpg' alt='scales' />
			</Wrap>
		</Carousel>
	);
}

export default ImgSlider;

const Carousel = styled(Slider)`
	margin-top: 20px;

	ul li button {
		&:before {
			font-size: 10px;
			color: rgb(150, 158, 171);
		}
	}

	li.slick-active button:before {
		color: #fff;
	}

	.slick-list {
		overflow: visible;
	}

	button {
		z-index: 1;
	}
`;

const Wrap = styled.div`
	cursor: pointer;
	img {
		border: 4px solid transparent;
		border-radius: 4px;
		width: 100%;
		height: 100%;
		box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
			rgb(0 0 0 / 73%) 0px 16px 10px -10px;
		transition-duration: 300ms;

		&:hover {
			border: 4px solid rgba(249, 249, 249, 0.8);
		}
	}
`;
