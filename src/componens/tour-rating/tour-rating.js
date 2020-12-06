import React, {Component, useEffect, useState} from 'react';
import StarPicker from 'react-star-picker';
import NavBar from "../home/navBar/navBar";
import Footer from "../home/footer/footer";
import Modal from "react-bootstrap/Modal";
import { useHistory } from 'react-router-dom';
import './tour-rating.css'
import {useTranslation} from "react-i18next";


const TourRating=()=>{
    const [tourId, setTourId] = useState()
    const [userToken, setUserToken] = useState()
    const [rating, setRating] = useState(null);
    const [description, setDescription] = useState('')
    const [show, setShow] = useState(false)
    const {t} = useTranslation()

    useEffect(()=>{
            setTourId(localStorage.getItem('tourId'))
            setUserToken(localStorage.getItem('token'))
        },[tourId])

    const onChange = (value) => {
        setRating(value);
    };

    const handleInput =(e)=>{
        setDescription(e.target.value)
        console.log(description)
    }

    const handleClose = () => {
        setShow(false);
        setTimeout(()=>{
            routeChange()
        },  1000)
    }

    let history = useHistory();

    const routeChange=()=> {
        let path = "/";
        history.push(path);
    }

        const giveFeedBack =()=>{
            fetch('http://admin.tripsaround.me/api/add-ratings/', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Authorization": "Token " + userToken
                },
                body:JSON.stringify({
                    "tour": tourId,
                    "star": rating,
                    "description": description
                })
            })
                .then((response) => {
                    if (response.ok == true){
                        setShow(true)
                    }
                    return response.json();
                })
                .catch(err => console.error(err))
        }

        return (
            <div>
                <NavBar />
                    <div className="tour">

                        <div className="tour-rating">
                            <textarea onChange={handleInput}
                                      placeholder={t("rating.write")}
                                      className={"tour-rating__description"}
                                      name="description" id="description" cols="30" rows="5">

                            </textarea>
                            <StarPicker onChange={onChange} value={rating} />
                            <h3>{t("rating.opinion")}</h3>
                            <button className="tour-rating__btn" onClick={giveFeedBack}>{t("rating.feedback")}</button>
                        </div>

                    </div>

                <Modal show={show} onHide={handleClose} onClick={handleClose}>
                    <div className="modal-request">
                        <h1>{t("rating.thanks")}</h1>
                        <button className="modal-request-btn" onClick={handleClose}>OK</button>
                    </div>
                </Modal>

                <Footer />
            </div>
        );
}

export default TourRating;