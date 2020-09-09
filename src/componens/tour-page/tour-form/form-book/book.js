import React, {useEffect, useState} from "react";
import Counter from "./counter/counter.js";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css';
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router'
import {groupInfo} from "../../../../actions/groupInfo";
import DatePicker from "./datepicker/datepicker"



const Book =(props)=> {

    useEffect(() => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
        props.setTourBookInfo([])

        let slots = []
        if (props.info) {
            slots = props.info
        }

        // let freeSlot = []
        // if (slots.group_tour[0]){
        //     freeSlot = slots.group_tour[0]
        // }
        // setFreeSlots(freeSlot.free_slots)

    }, []);

    const [freeSlots,setFreeSlots] = useState();
    console.log('%c freeSlots: ','color:red',freeSlots)


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

    }


    return (
        <div className="book">
            <div className="book-price">
                <h2>{props.tourData.min_price}$ to {props.tourData.max_price}$</h2>

            </div>
            <div className="book-picker">

                <p className="book-picker__select">Select Date and Travelers:</p>
                <DatePicker
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}/>

                <p className="book-picker__date">Count of extra people:</p>
                <Counter
                    setTourBookInfo={props.setTourBookInfo}
                    tourBookInfo={props.tourBookInfo}
                    freeSlots={freeSlots}/>


                <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                    <button className="update" onClick={onclickBook}>Book</button>
                </Link>
                <button className="private" onClick={privateTour}>Private tour</button>
                <p style={{"margin-top": "5px"}}>This button was created for a private tour request</p>
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
