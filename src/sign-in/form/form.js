import React from "react";
import './form.css'

const Form =()=>{
    return(
        <div className="form">
            <form>
                <input placeholder='Login' type="text"/>
                <input placeholder='Password' type="text"/>
                <a>Forgot your password?</a>
                <button>Sign In</button>
            </form>
        </div>
    )
}
export default Form;