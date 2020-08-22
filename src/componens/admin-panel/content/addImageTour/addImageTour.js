import React from "react";
import BlockBtn from "../block-btn/block-btn";
import "./addImageTour.css";
import LoadingImage from "./loadingImage/loadingImage"

const AddImageTour = (props) => {
  return (
    <div className="wrapperr-addTour">
      <BlockBtn />
      <div className="text-image">
<LoadingImage/>
<div className="addImage-block-btn">
<button className="addImage-btn">Upload images</button>
</div>
      </div>
    </div>
  );
};
export default AddImageTour;
