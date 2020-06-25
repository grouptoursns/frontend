import React from "react"
import "./box-card.css";
import Title from "../title/title.js"
import img from "../img/CARD.png"


const BoxCard=()=>{


    return(
        <div className="box-card">
            <Title/>
            <div className="container">
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>
                <div className="cards">
                    <img className="img" src={img}/>
                </div>

            </div>

        </div>
    )

}
export default BoxCard;