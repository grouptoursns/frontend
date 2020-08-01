import React, {Component} from 'react';
import './inclusions.css'

class Inclusions extends Component {
    render() {
        return (
            <div className="inclusions">
                <div className="inclusions-content">
                    <h3>What include</h3>
                    <p>Escape the capital on this full-day adventure tour,
                        which takes you to two of Kyrgyzstan’s most
                        famed natural and historical attractions.
                    </p>
                </div>
                <div className="inclusions-content">
                    <h3>Not include</h3>
                    <p>Escape the capital on this full-day adventure tour,
                        which takes you to two of Kyrgyzstan’s most
                        famed natural and historical attractions.
                    </p>
                </div>
            </div>
        );
    }
}

export default Inclusions;