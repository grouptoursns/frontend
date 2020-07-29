import React, {Component} from "react";
import './counter.css'

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
            count:1,
            show: false
        }
    }

    showFunc(){
        this.setState({
            show: !this.state.show
        })
    }

    increment =()=>{
        this.setState({count: this.state.count + 1})
    }
    decrement =()=>{
        this.setState({count: Math.max(this.state.count - 1,1)})
    }


    render(){
        return(
            <div>
                <div>
                    <input className="book-picker__adults-inp"
                           onClick={ ()=>this.showFunc()}
                           type="text"
                           value={"Adults: " + this.state.count}
                    />
                    {
                        this.state.show?
                           <div className="book-picker__adults">
                                <button onClick={this.decrement} className="book-picker__adults-btn">-</button>
                                <h5>{this.state.count}</h5>
                                <button onClick={this.increment} className="book-picker__adults-btn">+</button>
                           </div>
                            :null
                    }
                </div>

            </div>
        )
    }
}


export default Counter;
