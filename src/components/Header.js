import React, { useState } from "react"
import {  LOGO_URL } from "../utils/constants";


const Header= ()=>{

    const [BtnName,setBtnName]= useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} className="image-resize"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                    <button className="login-btn" onClick={(e)=>{
                        if(BtnName==="Login"){
                        setBtnName("Logout");
                        }
                        else{
                            setBtnName("Login");
                        }
                    }}>{BtnName}</button>
                </ul>
            </div>
        </div>
    )
}


export default Header;