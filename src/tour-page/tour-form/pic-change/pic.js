import React from "react";
import {Carousel} from 'react-responsive-carousel'
import './pic.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import img1 from './img/a2.jpg'
import img2 from './img/a5.jpg'

// import img2 from './img/Thumbnail1.png'
// import img3 from './img/Thumbnail2.png'



const Pic = () =>{
    return(
        <div className='slider'>
            <Carousel autoPlay>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img2} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img1} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img2} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img1} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img2} alt="pic.icon"/>
                </div>
            </Carousel>
        </div>
    )
}
export default Pic;