import React, {useEffect, useState} from "react";
import Counter from "./counter/counter.js";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css';
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {groupInfo} from "../../../../actions/groupInfo";
import DatePicker from "./datepicker/datepicker"
import {useTranslation} from "react-i18next";
import Modal from "react-bootstrap/Modal";


const Book =(props)=> {
    const {t} = useTranslation()
    const [userBoolen, setUserBoolean] = useState(false)
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);

    useEffect(() => {
        props.setTourBookInfo([])

        setUserBoolean(JSON.parse(localStorage.getItem('user')))
    }, []);



    let arrId=[];
    const onclickBook=()=>{
            props.groupInfo(props.tourBookInfo.id)
    }




    let token = localStorage.getItem('token')
    const privateTour=()=>{
        fetch(`http://admin.tripsaround.me/tour/${props.id}/send-email`,{
            headers: {
                Authorization: 'Token ' + token
            }
        })
            .then((response) => {
                if (response.ok == true){
                    setShow(true)
                }
                return response.json()
            })
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }


    return (
        <div className="book">
            <div className="book-price">
                <h2>{props.tourData.min_price}$ {t("tour.to")} {props.tourData.max_price}$</h2>

            </div>
            <div className="book-picker">

                <p className="book-picker__select">{t("tour.date")}</p>
                <DatePicker
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}
                    id={props.id}
                    info={props.info}
                />

                <p className="book-picker__date">{t("tour.count")}</p>
                <Counter
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}
                    id={props.id}
                    info={props.info}
                    />

                {
                    userBoolen ?
                        <div>
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                            <button className="update" onClick={onclickBook}>{t("tour.book")}</button>
                            </Link>


                            <button className="private" onClick={privateTour}>{t("tour.private")}</button>
                            <p style={{"margin-top": "5px"}}>{t("tour.descrip")}</p>

                            <Link to="/tour-rating" style={{color: 'white', textDecoration: 'none'}}>
                                <button className="update">{t("rating.btn")}</button>
                            </Link>
                        </div>
                    :
                    <p style={{"color": "red","font-size":"16px" ,"font-weight": "bolder", "margin-top":"40px"}}>
                        {t("tour.must")}</p> }

                <Modal show={show} onHide={handleClose}>
                    <div className="modal-request">
                        <h1>{t("privateTour")}</h1>
                        <button className="modal-request-btn" onClick={handleClose}>OK</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tourData:state.tourData,
        detailsTours: state.detailsTour.detailsTour
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(tourDataFetch(url))},
        groupInfo: (id) => dispatch(groupInfo(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
