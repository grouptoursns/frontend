import React from "react";
import "./text-tours.css"
import {useTranslation} from "react-i18next";


const TextTours= ()=>{
    const {t} = useTranslation()

    return(
        <div className="text-block">
               <span className="text2">{t("bestTours.best")}</span>
        </div>
     
    );
}
export default TextTours;