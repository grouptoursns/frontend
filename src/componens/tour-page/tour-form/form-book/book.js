import React, {useEffect, useState} from "react";
import Counter from "./counter/counter.js";
// import DatePicker, { addDays } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css';
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router'
import {groupInfo} from "../../../../actions/groupInfo";
import DatePicker from "./datepicker/datepicker"



const Book =(props)=> {
    let a = []
    if (props.tourData.group_tour) {
        a = [...props?.tourData?.group_tour]
    }


    useEffect(() => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    }, []);



    let arrId=[];
    const onclickBook=()=>{

        if(props.tourBookInfo.count = a[0].free_slots){
            // return <Redirect to="/tourspage"></Redirect>
            alert('too mane people!')
        }
        else{
            arrId=props.tourData.group_tour.map((item)=>{
                return item.id
            })
            props.groupInfo(arrId)
            console.log(arrId)
        }
    }


    const privateTour=()=>{

    }


    return (
        <div className="book">
            <div className="book-price">
                <h2>{props.tourData.min_price}$ to {props.tourData.max_price}$</h2>
                <p className="book-price__size">Price varies by group size</p>
            </div>
            <div className="book-picker">

                <p className="book-picker__select">Select Date and Travelers:</p>
                <DatePicker
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}/>

                <p className="book-picker__date">Count of extra people:</p>
                <Counter
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}/>


                <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                    <button className="update" onClick={onclickBook}>Book</button>
                </Link>
                <button className="private" onClick={privateTour}>Private tour</button>
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
