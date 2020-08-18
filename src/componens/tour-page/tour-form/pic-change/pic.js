import React from "react";
import {Carousel} from 'react-responsive-carousel'
import './pic.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import img1 from './img/a2.jpg'
import img2 from './img/a5.jpg'


const Pic = (props) =>{

    let items = []
    if(props.pic.tour_image){
        const a = [...props?.pic?.tour_image]
        items = a.map((item) =>
            item)
    }

    return(
        <div className='slider'>
            <Carousel autoPlay>
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
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img1} alt="pic.icon"/>
                </div>
            </Carousel>
        </div>
    )
}
export default Pic;