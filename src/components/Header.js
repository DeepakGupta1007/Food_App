import React, { useContext, useEffect, useState } from "react"
import {  LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header= ()=>{
    //Using context
    const {loggedInUser}= useContext(UserContext)

    const [BtnName,setBtnName]= useState("Login");
    const onlineStatus =useOnlineStatus();
    useEffect(()=>{
        // console.log("UseEffect Called after every render of this component if there is not dependency array");
        // console.log("UseEffect called only once in case of empty dependency array,it will not called after evry rerender. ")
        // console.log("If there is anything in the dependency array, then it will only be called when dependency changes")
    },[BtnName])
    return (
        <div className='flex justify-between bg-purple-500 m-2 sm:bg-green-50  lg:bg-red-100'>
            <div className='w-20 '>
                <img src={LOGO_URL} className="image-resize"/>
            </div>
            <div className='flex items-center'>
                <ul className='flex  '>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">
                        Online Status: {onlineStatus?"Online":"Offline"}
                    </li>
                    <li className="px-2">
                        {/* <a href="/about">Home</a> */}
                        <Link to ="/">Home</Link>
                    </li>
                    <li className="px-2">
                    <Link to ="/about">About Us</Link>
                    </li>
                    <li className="px-2">
                        <Link to ="/contact">  Contact Us </Link>
                    </li>
                    <li className="px-2">
                        Cart
                    </li>
                    <li>
                        {loggedInUser}
                    </li>
                    <button className="px-2" onClick={(e)=>{
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