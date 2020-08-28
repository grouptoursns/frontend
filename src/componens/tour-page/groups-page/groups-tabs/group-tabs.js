import React, {Component, useEffect} from 'react';
import {NavLink} from "react-router-dom";
import './group-tabs.css'
import {tourDataFetch} from "../../../../actions/tourData";
import {connect} from "react-redux";
import {groupDataFetch} from "../../../../actions/groupDetails";


const GroupTabs =(props)=>{


    useEffect( () => {
        props.fetchData(`http://161.35.199.172/group/${props.groupId}`);
    },[]);

    let a = [...props.groupId]

        return (
            <div>
                <div className="tabs">
                    {a.map((group) =>
                        <NavLink className="info-tabs" to="/tour-groups/groups">Group {group}</NavLink>)}
                </div>
            </div>
        );
}

const mapStateToProps = (state) => {
    return {
        groupData: state.groupData,
        groupId: state.groupInfo.groupInfo
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => {dispatch(groupDataFetch(url))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupTabs);