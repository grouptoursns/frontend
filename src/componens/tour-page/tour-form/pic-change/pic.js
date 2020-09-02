import React, {useEffect} from "react";
import {Carousel} from 'react-responsive-carousel'
import './pic.css'
import 'react-responsive-carousel/lib/styles/carousel.css'
import img1 from './img/a2.jpg'
import img2 from './img/a5.jpg'
import img3 from './img/unknown.png'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";


const Pic = (props) =>{


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);


    let a;
    let items = []
    if(props.pic.tour_image){
       items = [...props?.pic?.tour_image]
        a = items.map((item) => item.image)
    }

    return(
        <div className='slider'>
            <Carousel autoPlay>
                <div className='slider-carousel'>
                    <img className='slider-carousel__img' src={img1} alt="pic.icon"/>
                </div>
                <div className='slider-carousel'>img1
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

const mapStateToProps = (state) => {
    return {
        tourData:state.tourData,
        detailsTours: state.detailsTour.detailsTour
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(tourDataFetch(url))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pic);