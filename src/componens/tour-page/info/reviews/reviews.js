import React, { useEffect} from 'react';
import './reviews.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const Reviews =(props)=>{

    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);


    let items = []
    let users = []
    if(props.tourData.rate_tour){
        const a = [...props?.tourData?.rate_tour]
        items = a.map((item) =>
            <p>{item.description}</p>)
        users = a.map((user) =>
            <h4>{user.user}</h4>
        )
    }

        return (
            <div className="reviews">
                <div className="reviews-content">
                    <h3>Reviews</h3>
                    <div>
                        <h4>{users}</h4>
                        <span>{items}</span>
                    </div>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);