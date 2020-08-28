import faker from 'faker'
import _ from 'lodash'
import React,{useEffect} from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from "react-redux";




const Category = (props) => {
    let stateOptions=[]
    if(props.arrCategory=== undefined){
        stateOptions =[]
    }
    else{
        stateOptions=props.arrCategory.map((item)=>{
        return{
          key:item.id,
          value:item.name,
         text:item.name,
        }
      });
    }
  
 


     
      


    const changeCategory=(e)=>{
        let text1=e.target.textContent;
        let categorya=stateOptions.filter((item)=>item.text===text1);
        if(categorya[0]!==undefined){
          let numberCategory=categorya[0].key
          props.categoryId(numberCategory)
         }
     
    }

    return(
        <Dropdown  search selection options={stateOptions}  onChange={changeCategory} />
    )
 
}

const mapStateToProps = (state) => {
    return {
        arrCategory:state.allDestinations.allDestinations.Category
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
   
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Category);