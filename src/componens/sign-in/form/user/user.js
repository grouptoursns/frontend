import React, { Component } from 'react';
import '../form.css'


export default class User extends Component {

    constructor(props){
        super(props);
        this.state={
            isAuthenticated:false,
            resData:'',
            text1:'',
            text2:'',
            checkbox: false
        }
    }

    change =(e)=>{
        const { name, value, type, checked } = e.target

        // if (type === 'checkbox'){
        //     checked = ;
        // }

        this.setState({ [name]: value })
    }

    componentDidMount() {
        const payLoad={
            email: '{this.state.text1}',
            password: '{this.state.text2}'
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
        if(this.state.isAuthenticated){}
        //         return (
        //             <div>
        //                 <p>Token is - {this.state.resData}</p>
        //             </div>
        //         );
        //     }
        //     else{
        //         return(<p>No data was return</p>)
        //     }
        // }

        return (

            <div className="form">
                <form className="form-cont">
                    <h2>Log in</h2>
                    <div>
                        <p className="form-cont__title">Login</p>
                        <input className="form-cont__input"
                        placeholder='Login'
                        type="text"
                               name="text1"
                               value={this.state.text1}
                               onChange={this.change}
                        />
                    </div>
                    <div>
                        <p className="form-cont__title">Password</p>
                        <input className="form-cont__input"
                        placeholder='Password'
                        type="password"
                        name="text2"
                               value={this.state.text2}
                               onChange={this.change}
                        />
                    </div>
                    <div className="form-cont__check">
                        <input className="form-cont__check-input" type="checkbox" name="checkbox" value={this.state.checkbox} onChange={this.change} />
                        <p className="form-cont__check-title">Remember me</p>
                    </div>
                    <button className="form-cont__btn">Login</button>
                    <a className="form-cont__link">Forgot your password?</a>
                </form>
            </div>
        )
    }
}
