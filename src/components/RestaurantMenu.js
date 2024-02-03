import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () =>{
    const {resId} =useParams();
    const jsonData = useRestaurantMenu(resId);//Custom hook

    if(jsonData === null){
        return (<Shimmer></Shimmer>);
    }
    const data= jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories;
    const {name,costForTwoMessage,cuisines} =jsonData?.data?.cards[2]?.card?.card?.info;
    
    return (

        <div className="menu">
            <h1>{name}</h1>
            <h2>{costForTwoMessage}</h2>
            <p>{cuisines.join(',')}</p>

            <ul>
                {data.map((cell)=>{
                    <li>Deepak+{cell?.card?.info?.name}</li>
                })}
            </ul>
        </div>
    );
}

export default RestaurantMenu;