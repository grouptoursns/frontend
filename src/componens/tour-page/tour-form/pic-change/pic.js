import React, {useEffect} from "react";
import {Carousel} from 'react-responsive-carousel'
import './pic.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import noImage from './img/no-image-icon-13.jpg'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";


const Pic = (props) =>{


    let pictures;
    pictures = props.pic.tour_image

    // if (pictures){
    //     console.log(pictures[0].image)
    // }


    let img1
    let img2
    let img3
    let img4
    let img5

    let trueImg1
    let trueImg2
    let trueImg3
    let trueImg4
    let trueImg5

    if (pictures){
        img1 = pictures[0].image
        img2 = pictures[1].image
        img3 = pictures[2].image
        img4 = pictures[3].image
        img5 = pictures[4].image

        trueImg1 = `http://161.35.199.172${img1}`
        trueImg2 = `http://161.35.199.172${img2}`
        trueImg3 = `http://161.35.199.172${img3}`
        trueImg4 = `http://161.35.199.172${img4}`
        trueImg5 = `http://161.35.199.172${img5}`
    }

    else {
        trueImg1 = noImage
        trueImg2 = noImage
        trueImg3 = noImage
        trueImg4 = noImage
        trueImg5 = noImage
    }




    return(
        <div className='slider'>
            <Carousel autoPlay>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={trueImg1} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>img1
                    <img className='slider-carousel__img' src={trueImg2} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={trueImg3} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={trueImg4} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={trueImg5} alt="pic.icon"/>
                </div>
            </Carousel>
        </div>
    )
}


export default Pic;