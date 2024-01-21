import React, { useState } from "react"
import RestaurantCard from "./RestaurantCard"
import listOfRest from "../utils/mockData"
import { useState } from "react"



const Body = ()=>{

    
const [listData, setData] = useState(listOfRest);


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
            {listData.map((data => (<RestaurantCard resData={data} key={data.card.info.id}></RestaurantCard>)))}
        </div>
    </div>
    )
}

export default Body;