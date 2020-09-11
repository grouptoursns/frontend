import React, { useState,useEffect } from "react";
import BlockBtn from "../block-btn/block-btn";
import "./ubdateTour-image.css";
import LoadingImage from "./loadingImage/loadingImage";
import { connect } from "react-redux";
import {updateTourImage} from "../../../../actions/admin-panel/updateTour-image/updateTour-imge";
import TourPictureAddAdmin from "../../../../actions/admin-panel/tourPicturesAdd/tourPictureAdd"
import Modal from "react-modal";


const UpdateTourImage = (props) => {
  const [data, setData] = useState(props.arrImage ? props.arrImage : []);
  const [del,setDel]=useState(false)
  let formData = new FormData();
  const updateImage = (arrFiles) => {
    setData([...arrFiles]);
    console.log(...arrFiles)
    console.log(props.match.params.id)
  };
  const Postdata = () => {
    if(data.length===0){
      console.log("hi")
   
    }
    else{
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      formData.append("image", data[i]);
    }
    props.TourPictureAdd(props.match.params.id, formData);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  }
  };
  useEffect(()=>{
    props.getArrImage(props.match.params.id)

  },[])

  return (
    <div className="wrapperr-addTour update-image-tour">
            <Modal
          isOpen={props.isOpenModal}
          style={{
            content: {
              position: "absolute",
              top: "30%",
              left: "30%",
              right: "30%",
              bottom: "30%",
              border: "1px solid #ccc",
              background: "#fff",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          }}
        >
            <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        </Modal>
      <div className="text-image">
        <span className="title-update-image">Upload pictures for the tour</span>
        <LoadingImage arrTourImage={props.arrImage ? props.arrImage : []} dataImage={updateImage} deleteImage={()=>setDel(true)}  idTour={props.match.params.id}/>
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
    isOpenModal:state.trigerModalCreteTour.trigerModalCreateImage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArrImage: (id) => dispatch(updateTourImage(id)),
    TourPictureAdd: (id, dataImage) =>
    dispatch(TourPictureAddAdmin(id, dataImage)),
};
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTourImage);
