import React,{useEffect} from "react";
import "./about.css";
import imgAbout from "./img/44240014405_58ce5bce45_h.png";
import History from "../about/history/history";
// import Features from "../about/features/features";
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer"
import {useTranslation} from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../actions/about";

const About = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const data = useSelector((state)=>state.AboutData.about_data)
    useEffect(() => {
      dispatch(getAbout());
    }, []);
    return (
    <div>
      <NavBar />
      <div className="page-about">
        <div className="content-about">
          <span className="about-title">{t("aboutUs.about")}</span>
          {/* <History /> */}
          {/*<Features />*/}
          {
            data.ImageToFront&&
            data.ImageToFront.map((item,index)=>{
              if(index%2==0&&item.image){
                return(
                  <img  key={item.id} className="about_img" alt="img" src={item.image} />
                )
              }
            })
          }
                    {
            data.AboutUsText&&
            data.AboutUsText.map((item,index)=>{
              if(index%2==0){
                return(
                <span key={item.indeterminate} className="about-descrip">{item.text}</span>
                )
              }
            })
          }
                   {
            data.ImageToFront&&
            data.ImageToFront.map((item,index)=>{
              if(index%2!==0&&item.image){
                return(
                  <img  key={item.id} className="about_img" alt="img" src={item.image} />
                )
              }
            })
          }
                    {
            data.AboutUsText&&
            data.AboutUsText.map((item,index)=>{
              if(index%2!==0){
                return(
                <span key={item.id} className="about-descrip">{item.text}</span>
                )
              }
            }) 
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default About;
