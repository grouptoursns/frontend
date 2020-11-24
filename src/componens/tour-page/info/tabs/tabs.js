import React, {Component} from 'react';
import {NavLink, useParams} from "react-router-dom";
import './tabs.css'
import {useTranslation} from "react-i18next";

const Tabs =(props)=>{
        const {t} = useTranslation()
        const params = useParams()
        console.log(params)
        return (
            <div className="tabs">
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}`}> {t("info.general")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}/itinerary`}>{t("info.itinerary")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}/inclusions`}>{t("info.inclusions")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}/guide`}>{t("info.guide")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}/meet`}>{t("info.meet")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to={`/tourspage/${params.id}/reviews`}>{t("info.reviews")}</NavLink>
            </div>
        );
}

export default Tabs;