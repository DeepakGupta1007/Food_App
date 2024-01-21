import React, { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import listOfRest from "../utils/mockData"
import { useState,useEffect } from "react"



const Body = ()=>{
    const [listData, setData] = useState([]);

    useEffect(()=>{
        fetchData();        
    },[]);


    const fetchData = async ()=>{
        const data = await fetch(
             "https://www.swiggy.com/mapi/homepage/getCards?lat=28.6034877&lng=77.348575"
        );

        const json =await data.json();
        setData(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listData.length===0){
        return (
        <h1>Loading..</h1>
        );
    }
    return (
    <div className="body">
        <div className='search'>
            
        </div>
        <div className='filter'>
            <button className="filter-btn" 
            onClick={()=>{
                console.log("button clicked");
                //filter logic here
                setData(listData.filter(
                    (res) => res.card.info.ratings.aggregatedRating.rating>3)
                );
            }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className='restaurant-container'>
            {listData.map(((data,index) => (<RestaurantCard resData={data} key={index}></RestaurantCard>)))}
        </div>
    </div>
    )
}

export default Body;