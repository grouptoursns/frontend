import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import './confirm.css'
import success from './img/image 1.png'
import errImg from './img/Component 1.png'
import { useParams } from 'react-router-dom'

const Confirm =()=>{
    const [confirmSuccess, setConfirmSuccess] = useState(false)
    const [confirmErr,setConfirmErr] = useState(false)
    const params = useParams()


    useEffect(()=>{
        if (params.uid  && params.token){
            fetch(`http://admin.tripsaround.me/api/users/customer-activate/${params.uid}/${params.token}`)
                .then((response) => {
                    if (response.ok){
                        setConfirmSuccess(true)
                    }
                    else{
                        setConfirmErr(true)
                    }
                    return response.json()
                })
                .then((data) => console.log('This is your data', data))
                .catch((err) => console.log(err))
        }

    },[params])



    return(
        <div>
            <Modal show={confirmSuccess}>
                <div className={"confirm-success"}>
                    <img src={success} alt="success.icon"/>
                    <span>You have successfully verified your account!</span>
                </div>
            </Modal>
            <Modal show={confirmErr}>
                <div className={"confirm-err"}>
                    <img src={errImg} alt="err.icon"/>
                    <span>Something went wrong, please try again later</span>
                </div>
            </Modal>

        </div>
    )
}

export default Confirm