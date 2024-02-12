import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";


const RestaurantCard=(data)=>{
    const {resData} = data;
    
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating,
        cuisines,
    } = resData?.info;

    return (
        <div 
        className="rounded-lg m-4 p-4 w-[230px] h-[350px] bg-gray-200 hover:bg-gray-400 hover:ease-in "
        data-testid='card'>
            <img className="rounded-lg  w-[200px] h-[180px]" 
            src={CDN_URL+cloudinaryImageId}
            alt='Not Found'></img>
            <h3 className="font-bold py-2 ">{name ? name : "Unknown"}</h3>
            <h3>{costForTwo ? costForTwo
 : "Unknown"}</h3>
            <h3 className="font-bold">{avgRating} Stars</h3>
            <h3>{cuisines[0]},{cuisines[1]}</h3>
            
        </div>
    )
}

export default RestaurantCard;


export const WithPromotedLabel =(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-4 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}