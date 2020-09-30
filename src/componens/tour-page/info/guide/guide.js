import React, {Component, useEffect} from 'react';
import './guide.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import nullPhoto from '../../groups-page/group/img/photo 6.png'
import {useTranslation} from "react-i18next";


const Guide =(props)=>{
    const {t} = useTranslation()

    useEffect( () => {
        props.fetchData(`http://161.35.199.172:7000/api/tours/${props.detailsTours}`);
    },[]);


    let guidePhoto
    guidePhoto = props.tourData.guide_photo
    if (!guidePhoto){
        guidePhoto = nullPhoto
    }

        return (
            <div className="guide">
                <div className="guide-content">
                    <h3>{t("info.guide")}</h3>
                    <div style={{"display" : "flex"}}>
                        <img src={guidePhoto} alt="guide_photo.icon" style={{"margin-right": "20px"}}/>
                        <p>{props.tourData.about_guide}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Guide);