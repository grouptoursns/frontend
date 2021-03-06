import React, { useState,useEffect } from "react";
import "./loadingImage.css";
import AddImage from "./addImage/addImage";

const LoadingImage = (props) => {
  const [objImage, setObjImage] = useState({});
useEffect(()=>{
   
    const arrImage= Object.values(objImage)
  
    props.dataImage(arrImage)
    console.log(arrImage)
},[objImage])
  const changeImage = (index, file) => {
    setObjImage({
      ...objImage,
      [index]: file,
    });
  };
  const changeDeleteImage = (index) => {
    const newObj = Object.entries(objImage).reduce((prev, [key, val]) => {
      if (key[0] === index) {
        return prev;
      }
      return {
        ...prev,
        ...{ [key]: val },
      };
    }, {});

    setObjImage(newObj);
  };


  return (
    <div className="loading-image">
      <AddImage
      id="0"
      defaultImage={props.arrTourImage}
        handleChange={changeImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
     
      />
      <AddImage
        id="1"
        defaultImage={props.arrTourImage}
        handleChange={changeImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
     
      />
      <AddImage
        id="2"
        defaultImage={props.arrTourImage}
        handleChange={changeImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
      />
      <AddImage
        id="3"
        handleChange={changeImage}
        defaultImage={props.arrTourImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
      />
      <AddImage
        id="4"
        handleChange={changeImage}
        defaultImage={props.arrTourImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
      />
      <AddImage
        id="5"
        handleChange={changeImage}
        defaultImage={props.arrTourImage}
        deleteImage={changeDeleteImage}
        idTour={props.idTour}
      />
    </div>
  );
};
export default LoadingImage;
