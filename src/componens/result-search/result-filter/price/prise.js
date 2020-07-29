import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import "./prise.css";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

function valuetext(value) {
  return `${value} $`;
}

export default function Price() {
  const classes = useStyles();
  const [value, setValue] = React.useState([200, 600]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
      Price range
      </Typography>
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