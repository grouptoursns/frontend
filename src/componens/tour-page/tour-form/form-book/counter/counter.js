import React, {Component, useState, useEffect} from "react";
import './counter.css'
import users from '../img/users.png'
import {connect} from "react-redux";
import {groupDataFetch} from "../../../../../actions/groupDetails";
import {tourDataFetch} from "../../../../../actions/tourData";


const Counter = (props) => {
    const [count,setCount] = useState(1);
    const [show,setShow] = useState(false);

    useEffect(() => {
        props.fetchData(`http://161.35.199.172/group/${props.detailsTours}`)
    }, []);

    useEffect(()=>{
        setCount(1)
    },[props.tourBookInfo.value])

    let slot
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
                {/*<div className="book-picker__form" style={{"margin-top":"10px"}}>*/}
                {/*    <img src={users} alt="adults.icon" style={{"padding": "0px 10px"}}/>*/}
                <input className="book-picker__adults-inp"
                       onClick={ ()=> setShow(!show)}
                       type="text"
                       value={"Adults: " + count}
                />
                {/*</div>*/}
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
