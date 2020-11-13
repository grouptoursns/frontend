import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './tabs.css'
import {useTranslation} from "react-i18next";

const Tabs =(props)=>{
        const {t} = useTranslation()

        return (
            <div className="tabs">
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage">{t("info.general")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/itinerary">{t("info.itinerary")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/inclusions">{t("info.inclusions")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/guide">{t("info.guide")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/meet">{t("info.meet")}</NavLink>
                <NavLink activeClassName="active" className="info-tabs" to="/tourspage/reviews">{t("info.reviews")}</NavLink>
            </div>
        );
}

export default Tabs;