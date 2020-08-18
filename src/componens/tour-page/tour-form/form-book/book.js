import React, {useEffect, useState} from "react";
import Counter from "./counter/counter.js";
import DatePicker, { addDays } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './book.css';
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {Link} from "react-router-dom";



const Book =(props)=> {
    if (props.tourData.avg_rate_tour) {
        const a = [...props?.tourData?.avg_rate_tour]
    }


    // const items = props.tourData.group_tour.map((item, key) => {
    //     console.log(item.start_time);
    // })
    // console.log(items)

    useEffect(() => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    }, []);
// const [startDate, setStartDate] = useState(null)

    // let state = {
    //     startDate: "",
    //     show: false
    // }



    // function showFunc() {
    //     this.setState({
    //         show: !this.state.show
    //     })
    // }

    return (
        <div className="book">
            <div className="book-price">
                <h2>from {props.tourData.min_price}$ to {props.tourData.max_price}$</h2>
                <p className="book-price__size">Price varies by group size</p>
            </div>
            <div className="book-picker">
                <p className="book-picker__select">Select Date and Travelers</p>
                {/*<DatePicker*/}
                {/*    placeholder="Select date"*/}
                {/*    selected={startDate}*/}
                {/*    onChange={date => setStartDate(date)}*/}
                {/*    // includeDates={[new Date(), addDays(new Date(), 1)]}*/}
                {/*/>*/}

                {/*<div>*/}
                {/*    <input className="book-date"*/}
                {/*           onClick={() => this.showFunc()}*/}
                {/*           type="text"*/}
                {/*           value={"Start date:"}*/}
                {/*    />*/}
                {/*    {*/}
                {/*        this.state.show ?*/}
                {/*            <div className="book-date__list">*/}
                {/*                <p>{props.tourData.group_tour[0].start_time}</p>*/}
                {/*                <p>{props.tourData.group_tour[0].finish_time}</p>*/}
                {/*            </div>*/}
                {/*            : null*/}
                {/*    }*/}
                {/*</div>*/}

                <Counter/>
                <Link style={{color: 'white', textDecoration: 'none'}} to="/tour-groups/groups">
                    <button className="update">Book</button>
                </Link>
                <button className="private">Private tour</button>
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
        fetchData: url => {dispatch(tourDataFetch(url))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
