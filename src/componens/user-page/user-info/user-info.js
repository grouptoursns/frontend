import React,{useState} from "react"
import "./user-info.css"
import avatar from "./img/274px-Mark_Zuckerberg_em_setembro_de_2014 1.png"
import mapPin from "./img/map-pin.png"
import map from "./img/map.png"
import flag from "./img/Vector (4).png"
import galka from "./img/Vector (5).png"
import settings from "./img/settings.png"
import noPhoto from "./img/null.png"
import {Link} from "react-router-dom"
import {useTranslation} from "react-i18next";

const UserInfo =(props)=>{
    const {t} = useTranslation()

    console.log(props.userInfo)
    const [clas,setClas]=useState("1");
    let{first_name,last_name,avatar,count_of_visited_tours}=props.userInfo
    localStorage.setItem("name", first_name)
    console.log(avatar)
    const clickLink=(event)=>{

        setClas(event.target.id)
    }
    return(
        <div className="user-info">
            <img className="user-image" alt="" src={avatar || noPhoto}/>
            <div className="info-content">
                <div className="user-information">
    <span className="user-name">{first_name+" "+ last_name}</span>
                    <div><img src={mapPin} alt=""/><span className="user-text ">Kyrgyzstan, Bishkek</span></div>
                    <div><img src={map} alt=""/><span  className="user-text">{t("profile.visited")} {count_of_visited_tours} </span></div>
                </div>
                <div className="user-links">    
                    <Link to="/user-page"><div className={ (clas ==="1" ? " active-button":'' )} id="1" onClick={(e)=>clickLink(e)} ><img src={flag} alt=""/> <span id="1" onClick={(e)=>clickLink(e)}  className="user-text">{t("profile.booked")}</span></div></Link>
                    
                    <Link to="/user-page/visited-tour"><div id="2"  onClick={(e)=>clickLink(e)}  className={"button-mr"+ (clas ==="2" ? " active-button":'' )}><img src={galka} alt=""/> <span id="2"  onClick={(e)=>clickLink(e)}   className="user-text">{t("profile.visited")}</span></div></Link>
                    <Link to="/user-page/settings"><div id="3"  onClick={(e)=>clickLink(e)}  className={"button-mr"+ (clas ==="3" ? " active-button":'' )}><img src={settings} alt=""/> <span id="3"  onClick={(e)=>clickLink(e)} className="user-text">{t("profile.settings")}</span></div></Link>
                </div>

            </div>

        </div>
    )
}
export default UserInfo;