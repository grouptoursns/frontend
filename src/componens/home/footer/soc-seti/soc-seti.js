import React from "react"
import "./soc-seti.css"
import instagram from "./img/Vector(1).png";
import facebook from "./img/Vector(2).png";
import stripe from "./img/Vector(3).png";
import twiter from "./img/Vector(4).png";
import youtube from "./img/Vector(5).png";
import {useTranslation} from "react-i18next";


const SocSeti =()=>{
    const {t} = useTranslation()

    return(
        <div className="block-soc-seti">
            <span>{t("footer.social")}</span>
            <div className="soc-icon">
            <img src={instagram} alt="img"/>
            <img src={facebook} alt="img"/>
            <img src={stripe} alt="img"/>
            <img src={twiter} alt="img"/>
            <img src={youtube} alt="img"/>
            </div>
           

        </div>
    )
}
export default SocSeti;