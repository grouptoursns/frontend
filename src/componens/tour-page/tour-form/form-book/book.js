import React, {useEffect, useState} from "react";
import Counter from "./counter/counter.js";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css';
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {groupInfo} from "../../../../actions/groupInfo";
import DatePicker from "./datepicker/datepicker"



const Book =(props)=> {
    const [userBoolen, setUserBoolean] = useState(false)

    useEffect(() => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
        props.setTourBookInfo([])

        let slots
        slots = props.tourData.group_tour
            //console.log('slots',slots[0])

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

    }
    console.log('book',props.tourBookInfo)
    // if (props.tourBookInfo.value = ''){
    //
    // }


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

                {
                    userBoolen ?
                        <div>
                            <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                            <button className="update" onClick={onclickBook}>Book</button>
                            </Link>


                    <button className="private" onClick={privateTour}>Private tour</button>
                    <p style={{"margin-top": "5px"}}>This button was created for a private tour request</p>
                        </div>
                    :
                    <p style={{"color": "red","font-size":"16px" ,"font-weight": "bolder", "margin-top":"40px"}}>
                    You must be login as a user to book this tour!</p> }
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
