import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from "../../../home/home";
import '../form.css'


const  initialState ={
    isAuthenticated:false,
    resData:'',
    email:'',
    password:'',
    emailErr:'',
    passwordErr:'',
    checked: false,
    userErr: ''
}

export default class User extends Component {

    constructor(props){
        super(props);
        this.state={initialState}
        this.Login = this.Login.bind(this)
    }

    handleChange = event =>{
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        })
    }

    validate = () =>{
        let emailErr = '';
        let passwordErr = '';
        let userErr = '';



        if(this.state.resData){
            userErr = "No such user exists"
        }

        if(!this.state.password){
            passwordErr = "Password cannot be blank"
        }

        if (!this.state.email.includes("@")){
            emailErr = 'Invalid email';
        }
        if (emailErr || passwordErr || userErr){
            this.setState({emailErr, passwordErr, userErr})
            return false;
        }
        return true;
    };

    handleSubmit = event =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            //clear form
            // this.setState(initialState)
        }

    }

    Login() {
        const payLoad={
            email: (this.state.email),
            password: (this.state.password)
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
            isAuthenticated:true,
            });


            },
        (error) => {
            console.log(error)
            this.setState({
                isAuthenticated:false,
                resData:''
            })
        }
        );
    }


    render() {
        if(this.state.isAuthenticated == true) return <Redirect to="/" />
        return (
            <div className="form">
                <form className="form-cont" onSubmit={this.handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        <p className="form-cont__title">Email</p>
                        <input className="form-cont__input"
                        placeholder='Email'
                        type="text" name="email" onChange={this.handleChange} value={this.state.email}
                        />

                        <div style={{color:"red", marginTop:"-7px", marginBottom:"5px"}}>
                            {this.state.emailErr}
                        </div>

                        </div>
                    <div>
                        <p className="form-cont__title">Password</p>
                        <input className="form-cont__input"
                        placeholder='Password'
                        type="password" name="password" onChange={this.handleChange} value={this.state.password}
                        />
                        <div style={{color:"red", marginTop:"-7px", marginBottom:"5px"}}>
                            {this.state.passwordErr}
                        </div>
                    </div>
                    <div className="form-cont__check">
                        <input className="form-cont__check-input"
                               type="checkbox"
                               name="checkbox"
                               onChange={this.handleChange.bind(this)}
                               value={this.state.checked}
                        />
                        <p className="form-cont__check-title">Remember me</p>
                    </div>
                    <button className="form-cont__btn" type="submit" onClick={this.Login}>Login</button>
                    <a className="form-cont__link">Forgot your password?</a>

                    <div style={{color:"red",fontWeight:"bold", marginTop:"-7px", marginBottom:"5px"}}>
                        {this.state.userErr}
                    </div>

                </form>
            </div>
        )
    }
}
