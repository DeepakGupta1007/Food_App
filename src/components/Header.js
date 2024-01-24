import React, { useEffect, useState } from "react"
import {  LOGO_URL } from "../utils/constants";


const Header= ()=>{

    const [BtnName,setBtnName]= useState("Login");

    useEffect(()=>{
        console.log("UseEffect Called after every render of this component if there is not dependency array");
        console.log("UseEffect called only once in case of empty dependency array,it will not called after evry rerender. ")
        console.log("If there is anything in the dependency array, then it will only be called when dependency changes")
    },[BtnName])
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