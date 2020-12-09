import React, {Component, useState, useEffect} from "react";
import './counter.css'
import {connect} from "react-redux";
import {tourDataFetch} from "../../../../../actions/tourData";


const Counter = (props) => {
    const [count,setCount] = useState(1);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        setCount(1)
        props.setTourBookInfo({...props.tourBookInfo, count : count})
    },[props.tourBookInfo.value])

    let slot;
    if (props?.tourData?.group_tour?.length){
        slot = props.tourData.group_tour[props?.tourBookInfo?.index || 0].free_slots
    }
    else{
        slot = 0
    }

    const updateCount = (updateValue) => {
        setCount(count + updateValue)
        props.setTourBookInfo({...props.tourBookInfo, count : count+updateValue})
    }

    return(
        <div>
            <div>
                <input className="book-picker__adults-inp"
                       onClick={ ()=> setShow(!show)}
                       type="text"
                       value={"Adults: " + count}
                />
                {
                    show?
                        <div className="book-picker__adults">
                            {
                                count > 1 ?
                                    (<button onClick={()=>{updateCount(-1)}} className="book-picker__adults-btn">-</button>)
                                    : null
                            }
                            <h5>{count}</h5>
                            {
                                count === slot ?
                                    (<p style={{"color": "red"}}>No more places</p>)
                                    : (<button onClick={()=>{updateCount(1)}  } className="book-picker__adults-btn">+</button>)
                            }
                        </div>
                        :null
                }
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
