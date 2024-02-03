import React, { useEffect, useState } from "react"
import {  LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header= ()=>{

    const [BtnName,setBtnName]= useState("Login");
    const onlineStatus =useOnlineStatus();
    useEffect(()=>{
        // console.log("UseEffect Called after every render of this component if there is not dependency array");
        // console.log("UseEffect called only once in case of empty dependency array,it will not called after evry rerender. ")
        // console.log("If there is anything in the dependency array, then it will only be called when dependency changes")
    },[BtnName])
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} className="image-resize"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        Online Status: {onlineStatus?"Online":"Offline"}
                    </li>
                    <li>
                        {/* <a href="/about">Home</a> */}
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                    <Link to ="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to ="/contact">  Contact Us </Link>
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