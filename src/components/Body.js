import React, { useEffect, useState } from "react"
import RestaurantCard,{WithPromotedLabel} from "./RestaurantCard"
import listOfRest from "../utils/mockData"
import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = ()=>{
    const [listData, setData] = useState([]);
    const [originalData,setOrgiginalData]=useState([]);
    const [searchText,setsearchText]=useState("");
    
    const RestaurantCardWithLabel=WithPromotedLabel(RestaurantCard);

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
        //.gridWidget?.gridElements?.infoWithStyle);
    }
    //Can merge this in a single using ternary operator
   const onlineStatus = useOnlineStatus();
   if(onlineStatus===false){
    return (
        //Give a good game
        <h1>Check your internet connection.</h1>
    )
   }
   
    if(listData.length===0){
        return (
        <Shimmer></Shimmer>
        );
    }
    // console.log(listData);
    return (    
    <div className="body">
        <div className='flex'>
            <div className='flex'>
                <input type="text" className="block rounded-lg border-0 px-3.5 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button className="px-4  bg-green-200 mx-4 rounded-lg" onClick={()=>{
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
            <button className="px-4  bg-green-200 mx-4 rounded-lg" 
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
        <div className='flex flex-wrap'>
            {listData.map(((data,index) => (
            <Link to ={"/restaurants/"+data.info.id} key={data.info.id}> 
            {data.info.promoted ? (<RestaurantCardWithLabel resData={data}></RestaurantCardWithLabel>) :<RestaurantCard resData={data}></RestaurantCard>}
            {/* <RestaurantCard resData={data} ></RestaurantCard> */}
            </Link>)))}
        </div>
    </div>
    )
}

export default Body;