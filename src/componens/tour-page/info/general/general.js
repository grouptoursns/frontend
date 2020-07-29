import React, {Component} from 'react';
import './general.css'

class General extends Component {
    render() {
        return (
            <div className="general">
                <div className="general-content">
                    <h3>Duration</h3>
                    <p>Escape the capital on this full-day adventure tour,
                        which takes you to two of Kyrgyzstan’s most
                        famed natural and historical attractions.
                        First, head to scenic Tokmok for a look at Burana Tower,
                        a 9th-century minaret. Then, drive along the snow-capped
                        Tian Shan mountain range for a half-day trek to the picturesque,
                        turquoise-colored lake of Kol Tor.</p>
                </div>
                <div className="general-content">
                    <h3>Type of tour</h3>
                    <p>Professional guide</p>
                </div>
                <div className="general-content">
                    <h3>Travelers</h3>
                    <h4>Minimum numbers of travelers:</h4>
                    <h4>Maximum numbers of travelers:</h4>
                </div>
                <div className="general-content">
                    <h3>Required to bring</h3>
                    <p>Warm clothes, Food, water, example, example, example,
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit ess
                        e cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.</p>
                </div>
                <div className="general-content">
                    <h3>Fitness level</h3>
                    <p>Maybe 10</p>
                </div>
            </div>
        );
    }
}

export default General;