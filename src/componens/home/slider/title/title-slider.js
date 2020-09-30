import React from "react"
import "./title-slider.css"
import {useTranslation} from "react-i18next";


const TitleSlider=()=>{
    const {t} = useTranslation()

    return(
        <div className="title-slider">
            <span>{t("making.title")}</span>
            <span>{t("making.subtitle")}</span>
        </div>
    )
}
export default TitleSlider;