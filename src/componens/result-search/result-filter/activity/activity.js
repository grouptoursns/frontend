



import React,{useState} from 'react'
import { Dropdown } from 'semantic-ui-react';
import "./activity.css";
import { connect } from "react-redux";
import "semantic-ui-css/semantic.min.css";



const Activity = (props) => {
  let category=[]
if(props.allActivity=== undefined){
  category =[]
}
else{
  category=props.allActivity.map((item)=>{
    return{
      key:item.id,
      value:item.name,
      flag:item.name,
     text:item.name,
    }
  });
  
}

  const [value,setValue]= useState(props.activity)
  if(props.country!=""){
    console.log(props.activity)

  }
  return (
    <Dropdown
      placeholder="Сhoose a activity"
      fluid
      search
      selection
      options={category}
      onChange={(e) => props.activityProps(e.target.textContent)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    activity:state.dataActivity.activity,
    allActivity:state.dataHome.homeData.Category
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);