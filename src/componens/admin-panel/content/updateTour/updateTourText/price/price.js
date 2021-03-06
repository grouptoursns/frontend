import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import React from "react"
import "./price.css"

const useStyles = makeStyles({
    root: {
      width: 230,
      height: 43,
    },
  });
  
  function valuetext(value) {
    return `${value} $`;
  }
  
  export default function Price(props) {
    let arrPrice=props.priceDefault;
    const classes = useStyles();
    const [value, setValue] = React.useState([arrPrice[0], arrPrice[1]]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
  props.price(value)
    };
  
    return (
      <div className={classes.root}>

        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}

        />
      </div>
    );
  }