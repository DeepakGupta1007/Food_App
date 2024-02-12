import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Rescategorycell=({data})=>{
    const dispath = useDispatch()
    const handleAddItems =(data)=>{
        //dispatch an action
        dispath(addItem(data));

        //This pizza is an action.payload.

        //Redux will create an object, and pass this as a paramter in payload.
    }
    return (
        <div 
        data-testid='categories-menu'
        className="border rounded p-4 mb-4 flex bg-white hover:bg-gray-100 w-11/12 m-auto">
            <div className="flex-1 text-left">
            <h2 className="text-xl font-semibold mb-2">
                {data?.card?.info?.name}
            </h2>
            <p className="text-gray-600 mb-2">
                {data?.card?.info?.price
                ? `₹${(data?.card?.info?.price / 100).toFixed(2)}`
                : `₹${(data?.card?.info?.defaultPrice / 100).toFixed(2)}`}
            </p>
            <p className="text-gray-700 mb-4">
                {data?.card?.info?.description}
            </p>
            {/* Additional styling for buttons */}
            <div className="flex items-center justify-between">
                <div>
                <button className="bg-green-500 text-black px-2 py-1 rounded" onClick={()=>handleAddItems(data)}>
                    Add
                </button>
                </div>
            </div>
            </div>
            {data?.card?.info?.imageId && (
            <div className="flex-shrink-0 ml-4"> {/* Added ml-4 for margin */}
                <img
                src={CDN_URL + data?.card?.info?.imageId}
                alt={data?.card?.info?.name}
                className="w-24 h-24 object-cover rounded"
                />
            </div>
            )}
        </div>
    );
}

export default Rescategorycell;