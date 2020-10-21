import React, {Component, useEffect} from 'react';
import './general.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";


const General =(props)=>{
    const {t} = useTranslation()

    useEffect( () => {
        props.fetchData(`http://admin.tripsaround.me/api/tours/${props.detailsTours}`);
    },[]);


    let type = ""
    let typeOfTour = ""
    if (props.tourData.category){
        type = [...props.tourData.category]
        typeOfTour = type.name
    }

        return (
            <div className="general">
                <div className="general-content">
                    <h3>{t("info.description")}</h3>
                    <p>{props.tourData.description}</p>
                </div>
                <div className="general-content">
                    <h3>{t("info.travelers")}</h3>
                    <h4>{t("info.min")} {props.tourData.min_people}</h4>
                    <h4>{t("info.max")} {props.tourData.max_people}</h4>
                </div>
                <div className="general-content">
                    <h3>{t("info.required")}</h3>
                    <p>{props.tourData.need_to_take}</p>
                </div>
                <div className="general-content">
                    <h3>{t("info.fitness")}</h3>
                    <p>{props.tourData.difficult}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(General);