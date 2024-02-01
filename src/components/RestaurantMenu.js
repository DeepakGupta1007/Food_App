import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () =>{
//To get the data from url
    const {resId} =useParams();
    // 625790
    const [data,setData]=useState([]);
    const [jsonData,setjsonData]=useState("");
    useEffect((()=>{
        fetchMenu();
    }),[]);

    const fetchMenu = async()=>{
        const dataF = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034877&lng=77.348575&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER");
        const json = await dataF.json();

        setjsonData(json);
        setData(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json);
        // console.log(data);
    }

    if(data.length ===0){
        return (<Shimmer></Shimmer>);
    }
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