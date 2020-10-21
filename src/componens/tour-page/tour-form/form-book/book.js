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



const Book =(props)=> {
    const {t} = useTranslation()
    const [userBoolen, setUserBoolean] = useState(false)

    useEffect(() => {
        props.fetchData(`http://admin.tripsaround.me/api/tours/${props.detailsTours}`);
        props.setTourBookInfo([])

        setFreeSlots(freeSlots)

        setUserBoolean(JSON.parse(localStorage.getItem('user')))
    }, []);



    const [freeSlots,setFreeSlots] = useState();
    const setSlots=()=>{

    }
    setSlots()


    let arrId=[];
    const onclickBook=()=>{
            arrId=props.tourData.group_tour.map((item)=>{
                return item.id
            })
            props.groupInfo(arrId)
    }



    const privateTour=()=>{
        fetch(`http://admin.tripsaround.me/tour/${props.detailsTours}/send-email`)
            .then((response) => response.json())
            .then((data) => console.log('This is your data', data))
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
                    tourBookInfo={props.tourBookInfo}/>

                <p className="book-picker__date">{t("tour.count")}</p>
                <Counter
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}
                    freeSlots={freeSlots}/>

                {
                    userBoolen ?
                        <div>
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                            <button className="update" onClick={onclickBook}>{t("tour.book")}</button>
                            </Link>


                    <button className="private" onClick={privateTour}>{t("tour.private")}</button>
                    <p style={{"margin-top": "5px"}}>{t("tour.descrip")}</p>
                        </div>
                    :
                    <p style={{"color": "red","font-size":"16px" ,"font-weight": "bolder", "margin-top":"40px"}}>
                        {t("tour.must")}</p> }
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
        groupInfo: (arr) => dispatch(groupInfo(arr)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
