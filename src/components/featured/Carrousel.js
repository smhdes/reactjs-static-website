import React from 'react';
import Slider from "react-slick";
import sliderOne from '../../resources/images/slide_one.jpg';
import sliderTwo from '../../resources/images/slide_two.jpg';
import sliderThree from '../../resources/images/slide_three.jpg';

const Carrousel = () => {

    const settings={
        dots:false,
        infinite:true,
        autoplay:true,
        speed:500
    };


    return (
        <div className="carrousel_wrapper"
        style={{
            height:`${window.innerHeight}px`,
            overflow:'hidden'
            
            }}>
            <Slider {...settings}>
        <div>
         <div className="carrousel_image"
         style={{
            height:`${window.innerHeight}px`,
            background:`url(${sliderOne})`

         }}>

         </div>
        </div>
       
        <div>
         <div className="carrousel-image"
         style={{
            height:`${window.innerHeight}px`,
            background:`url(${sliderTwo})`

         }}>

         </div>
        </div>

         <div>
         <div className="carrousel-image"
         style={{
            height:`${window.innerHeight}px`,
            background:`url(${sliderThree})`

         }}>

         </div>
        </div>
      </Slider>
        </div>
    );
};

export default Carrousel;