import { useEffect, useState } from "react";
const useRestaurantMenu=(resId)=>{
    //fetch data
    useEffect(()=>{
        fetchData();
    },[]);

    const [resInfo,setresInfo]=useState(null);
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6034877&lng=77.348575&restaurantId="+resId+"&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json);
        // setjsonData(json);
        // setData(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return resInfo;
}

export default useRestaurantMenu;