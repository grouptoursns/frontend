import React, {Component} from 'react';
import ReactStars from 'react-stars'
import './tour-rating.css'

class TourRating extends Component {


    render() {
        const ratingChanged = (newRating) => {
            console.log(newRating)
        }

        return (
            <div className="tour">
                <div className="tour-rating">
                    <ReactStars
                        size={25}
                        count={5}
                        color1="lightgrey"
                        color2="black"
                        onChange={ ratingChanged }
                    />
                    <h3>Please rate how much you enjoyed the trip!</h3>
                    <button className="tour-rating__btn">give feedback</button>
                </div>
            </div>
        );
    }
}

export default TourRating;