import React, {useEffect, useState} from 'react';


import {compose} from "redux";
import plus from './img/plus.png'
import done from './img/done.png'
import deleteImg from './img/del.png'
import "./addImage.css"
import css from './addPhote.module.css'
import axios from "axios"
import { connect } from "react-redux";
import {updateTourImage} from "../../../../../../actions/admin-panel/updateTour-image/updateTour-imge"
 const AddImage = props => {
    
    const [block, setBlock] = useState('block')
    const [url, setUrl] = useState('')
    const [hovered, setHovered] = useState(false)
    const [name, setName] = useState('')
    const [checkName, setCheckName] = useState('')
    const [image,setImage]= useState();
    const [idTour,setIdTour]=useState()
    const [deleteImage,setDeleteImage]=useState(false)
    const [idImage,setIdImage]=useState()
    const[dataFile,setDataFile]=useState()
    useEffect(()=>{
  if(props.arrImage){
    if(props.arrImage[props.id]){
        setImage(props.arrImage[props.id].image)
        setIdTour(props.arrImage[props.id].tour)
        setIdImage(props.arrImage[props.id].id)
        
    }
    else{
        setImage("")
   
    }
  }
  if(image || url){
    setBlock("none");
  }
  else{
    setBlock("block");
  }
})


   
function  clickDone(){
    let token=localStorage.getItem('token')
          axios
        .delete(`http://161.35.199.172/api/company/tours/${props.idTour}/images/${idImage}/`,{
            headers:{
              Authorization: 'Token ' + token 
            }
        })
        .then(res => {
            props.getArrImage(props.idTour)
            setDeleteImage(true)
            props.deleteImage()
            setImage('')
            setBlock("block");
      
            console.log(res.data)
        });
  
    
}
    const handlehange=(e)=>{
        let file = e.target.files[0];
        setBlock('none')
        let reader = new FileReader();
        if (e.target.files.length > 0) {
            if (checkName === '') {
                reader.readAsDataURL(e.target.files[0])
                setName(e.target.files[0].name)
            } else {
                if (e.target.files[0].name === checkName) {
                    setCheckName('')
                    return 0
                } else {
                    reader.readAsDataURL(e.target.files[0])
                    setName(e.target.files[0].name)
                }
            }
        } else {
            setBlock('block')
        }
        reader.onload = (e) =>{
            setUrl(e.target.result);
            setDataFile(file)
            setBlock("none");
            props.handleChange(props.id,file)
        } 
    }
    const containerStyle = {
        background: `url(http://161.35.199.172${image}) center center no-repeat`,
        backgroundSize: "cover",
      };
    return (
        <div className={css.fileWrapper}
        style={
            url.length > 0
              ? {
                  background: `url(${url}) center center no-repeat`,
                  backgroundSize: url.length > 0 ? "cover" : null,
                }
              : containerStyle
          }>
            <label className={css.inpWrapper}>
                <input
                    {...props}

                    onChange={(e) => handlehange(e)}
                       
                    accept="image/*" type="file" className={css.chooseFile}

                />
                <img style={{display: block}}
                     src={plus}
                     alt="+"/>
            </label>
            <img style={{display: block === 'block' ? 'none' : 'block'}}
                 src={hovered ? deleteImg : done}
                 onMouseOver={() => setHovered(!hovered)}
                 onMouseOut={() => setHovered(!hovered)}
                 onClick={() => {
    
                     setCheckName(name)
                     setUrl('')
                     setImage('')
                     setBlock('block')
                     if(image){
                        clickDone()
                        setImage('')
                        setBlock('block')
                     }
                     else{
                        props.deleteImage(props.id)
                        setBlock('block')
                     }
                  
                
                 }}
                 alt="Done"/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arrImage: state.getArrImage.state,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getArrImage: (id) => dispatch(updateTourImage(id)),
  };
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddImage);