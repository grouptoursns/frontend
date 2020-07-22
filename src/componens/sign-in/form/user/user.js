import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import '../form.css'


export default class User extends Component {

    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            resData:''
        }
    }

    componentDidMount(){
        const payLoad={
            email:'customer@bk.ru',
            password:'1234'
        }
        fetch('http:///161.35.199.172/api/users/login/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payLoad)
        })
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            this.setState({
            resData:data.token,
            isAuthenticated:true
        });
            
        },
        (error) => {
            console.log(error)
            this.setState({
                isAuthenticated:false,
                resData:'no data'
            })
        }
        );
        
    }


    render() {
        if(this.state.isAuthenticated){
            return (
                <div>
                    <p>Token is - {this.state.resData}</p>
                </div>
            ); 
        }
        else{
            return(<p>No data was return</p>)
        }
    }
}
        // return (
        //     <div className="form">
        //         <div className="form-tabs">
        //             <NavLink to="/user" className="form-tabs__link" activeClassName="selected">User</NavLink>
        //             <NavLink to="/company" className="form-tabs__link" activeClassName="selected">Company</NavLink>
        //         </div>
        //         <form className="form-cont" onSubmit={this.submitForm}>

        //             <h2>User</h2>
        //             <div>
        //                 <p className="form-cont__title">Login</p>
        //                 <input className="form-cont__input" 
        //                 placeholder='Login' 
        //                 type="text" 
        //                 />
        //             </div>
        //             <div>
        //                 <p className="form-cont__title">Password</p>
        //                 <input className="form-cont__input" 
        //                 placeholder='Password' 
        //                 type="password" 
        //                 />
        //             </div>
        //             <div className="form-cont__check">
        //                 <input className="form-cont__check-input" type="checkbox" />
        //                 <p className="form-cont__check-title">Remember me</p>
        //             </div>

        //             <input type="submit" className="form-cont__btn" />
        //             <a className="form-cont__link">Forgot your password?</a>

        //         </form>

                
            // </div>
//         )
//     }
// }
