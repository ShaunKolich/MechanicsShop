import React, { Component } from 'react';
import { Container, Row, Col } from 'fluid-react';
import '../../less/Carousel.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// import 'normalize.css/normalize.css';
import '../../css/slider-animations.css';
import '../../css/styles.css';


import Bugatti from "../../img/car-49278_1280.jpg";
import Merc from "../../img/amg-1880381_1280.jpg";
import Aston from "../../img/aston-2118857_1280.jpg";

const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: { Bugatti },

    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: { Merc },


    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Hi this is a test',
        button: 'Buy now',
        image: { Aston },

    }
];


function ControlledCarousel() {
    return (
        <div className="Carousel_container">
           <Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider> 
        </div>
    )

}
export default ControlledCarousel;