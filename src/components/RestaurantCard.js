import { CDN_URL } from "../utils/constants";


const RestaurantCard=(data)=>{
    const {resData} = data;
    const {
        cloudinaryImageId,
        name,
        price,
        ratings
    } = resData?.card?.info;
    const {
        rating,
        ratingCount
    }=ratings?.aggregatedRating;
    return (
        <div className="res-card">
            <img className="restaurant-logo" 
            src={CDN_URL+cloudinaryImageId}
            alt='Not Found'></img>
            <h3>{name ? name : "Unknown"}</h3>
            <h6>{price ? price : "Unknown"}</h6>
            <h6>{rating} Stars</h6>
            <h6>{ratingCount}</h6>
        </div>
    )
}

export default RestaurantCard;