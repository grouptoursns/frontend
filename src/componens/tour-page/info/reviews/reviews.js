import React, { useEffect} from 'react';
import './reviews.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

const Reviews =(props)=>{
    const {t} = useTranslation()

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
                    <h3>{t("info.reviews")}</h3>
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