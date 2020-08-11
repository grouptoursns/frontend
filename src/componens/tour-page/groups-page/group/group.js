import React, {Component} from 'react';
import './group.css'

class Group extends Component {
    render() {
        return (
            <div className="group">
                <div className="group-list">
                    <div className="group-list__guide">
                        Hello!<br/>
                        My name is Almaz. I will be your guide for the *tour name* tour. Nice to meet you!
                    </div>
                    <div className="group-list__people">
                        <h3>List of participants:</h3>
                        <ul>
                            <li>Aktan Dzhusupov</li>
                            <li>Aktan Dzhusupov</li>
                            <li>Aktan Dzhusupov</li>
                            <li>Aktan Dzhusupov</li>

                        </ul>
                    </div>
                </div>
                <div className="group-info">
                    <p>From 120$</p>
                    <p>Wendsday 15th</p>
                    <button className="alert">Book now</button>
                </div>
            </div>
        );
    }
}

export default Group;