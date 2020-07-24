import React, { Component } from 'react';
import '../form.css'


const  initialState ={
    isAuthenticated:false,
    resData:'',
    email:'',
    password:'',
    emailErr:'',
    passwordErr:'',
    check: false
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

        if(!this.state.password){
            passwordErr = "Password cannot be blank"
        }

        if (!this.state.email.includes("@")){
            emailErr = 'Invalid email';
        }
        if (emailErr || passwordErr){
            this.setState({emailErr, passwordErr})
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
            this.setState(initialState)
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
                <form className="form-cont" onSubmit={this.handleSubmit}>
                    <h2>Log in</h2>
                    <div>
                        <p className="form-cont__title">Login</p>
                        <input className="form-cont__input"
                        placeholder='Login'
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
                                onChange={this.handleChange} value={this.state.check}
                        />
                        <p className="form-cont__check-title">Remember me</p>
                    </div>
                    <button className="form-cont__btn" type="submit" onClick={this.Login}>Login</button>
                    <a className="form-cont__link">Forgot your password?</a>
                </form>
            </div>
        )
    }
}
