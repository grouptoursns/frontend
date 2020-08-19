import React, {Component, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './group-tabs.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";

const GroupTabs =(props)=>{


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/api/tours/${props.detailsTours}`);
    },[]);

    let a = []
    let groups = []
    let i = 0
    if(props.tourData.group_tour){
        a = [...props?.tourData?.group_tour]
        for (i ; i <= a.length; i++){
            return i = a.length
        }
        groups = a.map((group) =>
            <NavLink className="info-tabs" to="/tour-groups/groups">Group {group.id}</NavLink>)
    }

        return (
            <div>
                <div className="tabs">
                    {groups}
                </div>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        tourData:state.tourData,
        detailsTours: state.detailsTour.detailsTour,
        groupId: state.tourData
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(tourDataFetch(url))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupTabs);