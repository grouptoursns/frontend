import React from "react"
import "./user-info.css"
import avatar from "./img/274px-Mark_Zuckerberg_em_setembro_de_2014 1.png"
import mapPin from "./img/map-pin.png"
import map from "./img/map.png"
import flag from "./img/Vector (4).png"
import galka from "./img/Vector (5).png"
import settings from "./img/settings.png"

const UserInfo =()=>{
    return(
        <div className="user-info">
            <img alt="" src={avatar}/>
            <div className="info-content">
                <div className="user-information">
                    <span className="user-name">Dan Abramov</span>
                    <div><img src={mapPin} alt=""/><span className="user-text ">Kyrgyzstan, Bishkek</span></div>
                    <div><img src={map} alt=""/><span  className="user-text">Visited tours 54 </span></div>
                </div>
                <div className="user-links">
                    <div><img src={flag} alt=""/> <span  className="user-text">Booked tours</span></div>
                    <div className="button-mr"><img src={galka} alt=""/> <span  className="user-text">Visited tours</span></div>
                    <div  className="button-mr"><img src={settings} alt=""/> <span  className="user-text">Profile settings</span></div>
                </div>

            </div>

        </div>
    )
}
export default UserInfo;