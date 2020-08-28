import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

import {compose} from "redux";
import plus from './img/plus.png'
import done from './img/done.png'
import deleteImg from './img/del.png'
import "./addImage.css"
import css from './addPhote.module.css'

 const GuidPhoto = props => {
    let {setimg, image} = props;
    const [block, setBlock] = useState('block')
    const [url, setUrl] = useState('')
    const [hovered, setHovered] = useState(false)
    const [name, setName] = useState('')
    const [checkName, setCheckName] = useState('')
    const [image1,setImage]=useState(false)
    const[dataFile,setDataFile]=useState()
    useEffect(() => {
        if (image) {
            setUrl(image.image)
            setBlock('none')
            setName(image.image)
        }
    }, [image])

    // const handleLoadAvatar = (e) => {
    //     let file = e.target.files[0];
    //     let reader = new FileReader();
    //     reader.onload = (e) => {
    //         let img = document.createElement("img");
    //         img.onload = () => {
    //             let canvas = document.createElement('canvas');
    //             let ctx = canvas.getContext("2d");
    //             ctx.drawImage(img, 0, 0);
    //
    //             let MAX_WIDTH = 300;
    //             let MAX_HEIGHT = 300;
    //             let width = img.width;
    //             let height = img.height;
    //
    //             if (width > height) {
    //                 if (width > MAX_WIDTH) {
    //                     height *= MAX_WIDTH / width;
    //                     width = MAX_WIDTH;
    //                 }
    //             } else {
    //                 if (height > MAX_HEIGHT) {
    //                     width *= MAX_HEIGHT / height;
    //                     height = MAX_HEIGHT;
    //                 }
    //             }
    //             canvas.width = width;
    //             canvas.height = height;
    //             let ctxx = canvas.getContext("2d");
    //             ctxx.drawImage(img, 0, 0, width, height);
    //             let dataurl = canvas.toDataURL("image/png");
    //             setPicture({previewSrc: dataurl});
    //         }
    //         img.src = e.target.result;
    //     }
    //     reader.readAsDataURL(file);
    //     console.log(reader)
    // }
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
            setImage(true)
            setUrl(e.target.result);
            setDataFile(file)
            props.photoGuid(file)
            props.imageProps(true)
        } 
    }
    

    return (
        <div className={css.fileWrapper}
             style={{
                 background: `url(${url}) center center no-repeat`,
                 backgroundSize: url.length > 0 ? 'cover' : null
             }}>
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
                     setBlock('block')
                     props.imageProps(false)
       
                 }}
                 alt="Done"/>
        </div>
    )
}
export default GuidPhoto;