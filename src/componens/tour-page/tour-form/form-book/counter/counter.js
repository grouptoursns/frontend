import React, {Component, useState, useEffect} from "react";
import './counter.css'
import users from '../img/users.png'


const Counter = (props) => {
    const [count,setCount] = useState(1);
    const [show,setShow] = useState(false);

    const updateCount = (updateValue) => {
        setCount(count + updateValue)
        props.setTourBookInfo({...props.tourBookInfo, count : count+updateValue})
        console.log(props.tourBookInfo)
    }

    // console.log('%c freeSlots: ','color:greenyellow',props.freeSlots)
    return(
        <div>
            <div>
                <div className="book-picker__form" style={{"margin-top":"10px"}}>
                    <img src={users} alt="adults.icon" style={{"padding": "0px 10px"}}/>
                <input className="book-picker__adults-inp"
                       onClick={ ()=> setShow(!show)}
                       type="text"
                       value={"Adults: " + count}
                />
                </div>
                {   
                    show?
                        <div className="book-picker__adults">
                            {
                                count > 1 ?
                                    (<button onClick={()=>{updateCount(-1)}} className="book-picker__adults-btn">-</button>)
                                    : null
                            }
                            <h5>{count}</h5>
                            {
                                count === 15 ?
                                    (<p style={{"color": "red"}}>No more places</p>)
                                    : (<button onClick={()=>{updateCount(1)}  } className="book-picker__adults-btn">+</button>)
                            }

                        </div>
                        :null
                }
            </div>

        </div>
    )
}

export default Counter;

// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             count:1,
//             show: false
//         }
//     }
//
//     showFunc(){
//         this.setState({
//             show: !this.state.show
//         })
//     }
//
//     increment =()=>{
//         this.setState({count: this.state.count + 1})
//         this.props.setTourBookInfo({...this.props.tourBookInfo, count: this.state.count = this.state.count + 2})
//         console.log(this.props.tourBookInfo)
//     }
//     decrement =()=>{
//         this.setState({count: Math.max(this.state.count - 1,1)})
//         this.props.setTourBookInfo({...this.props.tourBookInfo, count: this.state.count =this.state.count - 2})
//         console.log(this.props.tourBookInfo)
//     }
//
//
//     render(){
//         return(
//             <div>
//                 <div>
//                     <input className="book-picker__adults-inp"
//                            onClick={ ()=>this.showFunc()}
//                            type="text"
//                            value={"Adults: " + this.state.count}
//                     />
//                     {
//                         this.state.show?
//                            <div className="book-picker__adults">
//                                 <button onClick={this.decrement} className="book-picker__adults-btn">-</button>
//                                 <h5>{this.state.count}</h5>
//                                 <button onClick={this.increment} className="book-picker__adults-btn">+</button>
//                            </div>
//                             :null
//                     }
//                 </div>
//
//             </div>
//         )
//     }
// }
