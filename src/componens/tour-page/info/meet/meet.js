import React, {Component, useEffect} from 'react';
import './meet.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {useTranslation} from "react-i18next";

const Meet =(props)=>{
    const {t} = useTranslation()

        return (
            <div className="meet">
                <div className="meet-content">
                    <h3>{t("info.meet")}</h3>
                    <p>
                        {props.tourData.gathering_place}
                    </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Meet);