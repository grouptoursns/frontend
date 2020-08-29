import React, {useEffect} from "react";
import ReactStars from 'react-stars'
import './title.css'
import geo from './img/map-pin.png'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
// import {detailsTour} from "../../../../actions/detailsTour";
// import {allTour} from "../../../../actions/allTour";

const Title = (props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);


    let a = []
    let star = 0
    { if(props.info.avg_rate_tour){
        a = [...props?.info?.avg_rate_tour]
        star = a[0].rating
    }}

    return(
        <div className="form-title">
            <h2>{props.info.name}</h2>
            <div className='title-info'>
                <div className='title-info__cont'>
                    <ReactStars
                    size={20}
                    count={5}
                    value={star}
                    edit={false}
                    half={true}
                    color1="lightgrey"
                    color2="gold"
                />
                </div>
                <div className='title-info__cont' style={{marginLeft: "80px"}}>
                    <img src={geo} alt="star.icon"/>
                    <span>{props.info.location}</span>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Title);