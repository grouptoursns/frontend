import React, {Component} from "react";
import './counter.css'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count:0
        }
    }

    increment =()=>{
        this.setState({count: this.state.count + 1})
    }
    decrement =()=>{
        this.setState({count: this.state.count - 1})
    }

    render(){
        return(
            <div className="book-picker__adults">
                <button onClick={this.increment} className="book-picker__adults-btn">+</button>
                <h5>{this.state.count}</h5>
                <button onClick={this.decrement} className="book-picker__adults-btn">-</button>
            </div>
        )
    }
}

export default Counter;
