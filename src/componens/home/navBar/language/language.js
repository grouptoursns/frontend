import React, {useEffect, useState} from "react";
import './language.css'
import Dropdown from "react-bootstrap/Dropdown";
import {useTranslation} from "react-i18next";

const Language = () => {
    const lang = localStorage.getItem("language")
    // const [open, setOpen] = useState(false)
    const [language, setLanguage] = useState(lang)
    const {t, i18n} = useTranslation()

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    return (

        <Dropdown>
            <Dropdown.Toggle style={{
                "background-color": "white",
                "border": "none",
                "color": "#000000"
            }} id="dropdown-basic">
                {language}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={
                    () => {
                        setLanguage('EN')
                        i18n.changeLanguage("en")
                        document.location.reload();
                    }
                }>EN</Dropdown.Item>
                <Dropdown.Item onClick={
                    () => {
                        setLanguage('RU')
                        i18n.changeLanguage("ru")
                        document.location.reload();
                    }
                }>RU</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>


        // <div className="drop">
        //     <div onClick={()=>setOpen(!open)} style={{"cursor":"pointer"}}>{language}</div>
        //     {
        //         open?
        //         <div className="drop-language" style={{"background-color": "pink", "position": "relative"}}>
        //             <div style={{"cursor":"pointer"}} onClick={
        //                 ()=> {
        //                     setLanguage('EN')
        //                     document.location.reload();
        //                 }
        //
        //             }>EN</div>
        //             <div style={{"cursor":"pointer"}} onClick={
        //                 ()=> {
        //                     setLanguage('RU')
        //                     document.location.reload();
        //                 }
        //             }>RU</div>
        //         </div>
        //         :null
        //     }
        // </div>
    )

}


export default Language