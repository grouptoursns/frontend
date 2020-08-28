import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import React from "react"
import "./count.css"

const useStyles = makeStyles({
    root: {
      width: 230,
      height: 43,
    },
  });
  
  function valuetext(value) {
    return `${value} $`;
  }
  
  export default function Count(props) {
   let arrCount=props.countDefault
    const classes = useStyles();
    const [value, setValue] = React.useState([arrCount[0], arrCount[1]]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
  props.count(value)
    };
  
    return (
      <div className={classes.root}>

        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={100}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}

        />
      </div>
    );
  }