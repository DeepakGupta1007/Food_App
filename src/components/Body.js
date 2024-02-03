import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import listOfRest from "../utils/mockData"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"

import { Link } from "react-router-dom";


const Body = ()=>{
    const [listData, setData] = useState([]);
    const [originalData,setOrgiginalData]=useState([]);
    const [searchText,setsearchText]=useState("");
    useEffect(()=>{
        fetchData();        
    },[]);
    const fetchData = async ()=>{
        const data = await fetch(
             "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6034877&lng=77.348575"
        );
        const json =await data.json();

        await setData(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        await setOrgiginalData(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.success?.cards)//.gridWidget?.gridElements?.infoWithStyle);
    }
    //Can merge this in a single using ternary operator
    // console.log(listData);
    if(listData.length===0){
        return (
        <Shimmer></Shimmer>
        );
    }
    return (
    <div className="body">
        
        <div className='filter'>
            <div className='search'>
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                    //Filter the restaurant cards and update theUI
                    console.log(searchText);
                    if(searchText===""){
                        setData(originalData);
                    }
                    else{
                    setData(originalData.filter(
                        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    ));
                    }
                }}>Search</button>
            </div>
            <button className="filter-btn" 
            onClick={()=>{
                console.log("button clicked");
                //filter logic here
                setData(listData.filter(
                    (res) => res.info.avgRating>4)
                );
            }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className='restaurant-container'>
            {listData.map(((data,index) => (
            <Link to ={"/restaurants/"+data.info.id} key={data.info.id}>
            <RestaurantCard resData={data} ></RestaurantCard></Link>)))}
        </div>
    </div>
    )
}

export default Body;