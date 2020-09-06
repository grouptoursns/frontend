import React, { useState } from "react";
import BlockBtn from "../block-btn/block-btn";
import "./ubdateTour-image.css";
import LoadingImage from "./loadingImage/loadingImage";
import { connect } from "react-redux";


const UpdateTourImage = (props) => {
  const [data, setData] = useState([]);
  let formData = new FormData();
  const updateImage = (arrFiles) => {
    setData([...arrFiles]);
  };
  const Postdata = () => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      formData.append("image", data[i]);
    }
    props.TourPictureAdd(props.idTour, formData);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="wrapperr-addTour update-image-tour">
      <div className="text-image">
        <span className="title-update-image">Upload pictures for the tour</span>
        <LoadingImage arrTourImage={props.arrImage ? props.arrImage : []} dataImage={updateImage} />
        <div className="addImage-block-btn">
          <button className="addImage-back" >
            &#10092; Back
          </button>
          <button className="addImage-btn" onClick={Postdata}>
            Upload images
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arrImage: state.getArrImage.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
};
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTourImage);
