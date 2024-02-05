import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Rescategories from './Rescategories';

const RestaurantMenu = () =>{
    const {resId} =useParams();
    const jsonData = useRestaurantMenu(resId);//Custom hook
    const [showIndex,setshowIndex]=useState(null);

    if(jsonData === null){
        return (<Shimmer></Shimmer>);
    }
    const data= jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards;
    const categories = data.filter(c=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    const {name,costForTwoMessage,cuisines} =jsonData?.data?.cards[2]?.card?.card?.info;
    return (

        <div className="text-center">
            <h1 className='font-bold my-5 text-3xl'>{name}</h1>
            <h2 className='font-semibold text-2xl'>{costForTwoMessage}</h2>
            <p className='font-semibold text-xl'>{cuisines.join(',')}</p>
            {categories.map((category,index)=>(
                <Rescategories 
                data={category?.card?.card} 
                key={index} 
                showItems={index==showIndex && true} 
                disableThis={()=>setshowIndex(null)} 
                setShowIndex={()=>setshowIndex(index)}>
                </Rescategories>
            ))}
        </div>
    );
}

export default RestaurantMenu;