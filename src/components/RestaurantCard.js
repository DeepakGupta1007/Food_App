import { CDN_URL } from "../utils/constants";


const RestaurantCard=(data)=>{
    const {resData} = data;
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating,
        cuisines
    } = resData?.info;

    return (
        <div className="res-card">
            <img className="restaurant-logo" 
            src={CDN_URL+cloudinaryImageId}
            alt='Not Found'></img>
            <h3>{name ? name : "Unknown"}</h3>
            <h3>{costForTwo ? costForTwo
 : "Unknown"}</h3>
            <h3>{avgRating} Stars</h3>
            <h3>{cuisines[0]},{cuisines[1]}</h3>
        </div>
    )
}

export default RestaurantCard;