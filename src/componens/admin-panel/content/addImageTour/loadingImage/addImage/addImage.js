import React, {useEffect, useState} from 'react';


import {compose} from "redux";
import plus from './img/plus.png'
import done from './img/done.png'
import deleteImg from './img/del.png'
import "./addImage.css"
import css from './addPhote.module.css'

 const AddImage = props => {
    let {setimg, image} = props;
    const [block, setBlock] = useState('block')
    const [url, setUrl] = useState('')
    const [hovered, setHovered] = useState(false)
    const [name, setName] = useState('')
    const [checkName, setCheckName] = useState('')
    const[dataFile,setDataFile]=useState()
    useEffect(() => {
        if (image) {
            setUrl(image.image)
            setBlock('none')
            setName(image.image)
        }
    }, [image])

   
    const handlehange=(e)=>{
        let file = e.target.files[0];
 
        props.changeImage()

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
            props.handleChange(props.id,file)
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
                     props.deleteChange(props.id)
                 }}
                 alt="Done"/>
        </div>
    )
}
export default AddImage;