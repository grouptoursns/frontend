import React, { useState,useEffect } from "react";
import "./loadingImage.css";
import AddImage from "./addImage/addImage";

const LoadingImage = (props) => {
  const [arrImage, setArrImage] = useState({});
useEffect(()=>{
    console.log(arrImage)

})
  const changeImage = (index, file) => {
    console.log(index, file);
    setArrImage({
      ...arrImage,
      [index]: file,
    });
  };
  const changeDeleteImage = (index) => {
    const newObj = Object.entries(arrImage).reduce((prev, [key, val]) => {
      console.log(key);
      if (key[0] === index) {
        return prev;
      }
      return {
        ...prev,
        ...{ [key]: val },
      };
    }, {});

    setArrImage(newObj);
  };

  return (
    <div className="loading-image">
      <AddImage
        id="0"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="1"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="2"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="3"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="4"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
      <AddImage
        id="5"
        handleChange={changeImage}
        deleteChange={changeDeleteImage}
      />
    </div>
  );
};
export default LoadingImage;
