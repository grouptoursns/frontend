import React, {Component, useEffect} from 'react';
import './inclusions.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

const Inclusions =(props)=>{
    const {t} = useTranslation()

        return (
            <div className="inclusions">
                <div className="inclusions-content">
                    <h3>{t("info.whatInclude")}</h3>
                    <p>{props.tourData.what_is_included}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Inclusions);