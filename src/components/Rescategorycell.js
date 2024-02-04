import React from "react";
import { CDN_URL } from "../utils/constants";
const Rescategorycell=({data})=>{
    console.log(data);
    // return (
    //     <div className="border rounded p-4 mb-4 flex bg-white hover:bg-gray-100 w-11/12 m-auto">
    //       <div className="flex-1 text-left"> {/* Added text-left class */}
    //         <h2 className="text-xl font-semibold mb-2">
    //           {data?.card?.info?.name}
    //         </h2>
    //         <p className="text-gray-600 mb-2">
    //           {data?.card?.info?.price
    //             ? `₹${(data?.card?.info?.price / 100).toFixed(2)}`
    //             : `₹${(data?.card?.info?.defaultPrice / 100).toFixed(2)}`}
    //         </p>
    //         <p className="text-gray-700 mb-4">
    //           {data?.card?.info?.description}
    //         </p>
    //         {/* Additional styling for buttons */}
    //         <div className="flex ">
    //           <button className="bg-blue-500 text-white px-2 py-1 rounded ">
    //             Add
    //           </button>
    //           {/* <button className="text-blue-500">+ Customizable</button> */}
    //         </div>
    //       </div>
    //       {data?.card?.info?.imageId && (
    //         <div className="flex-shrink-0">
    //           <img
    //             src={CDN_URL + data?.card?.info?.imageId}
    //             alt={data?.card?.info?.name}
    //             className="w-24 h-24 object-cover rounded"
    //           />
    //         </div>
    //       )}
    //     </div>
    //   );
    return (
        <div className="border rounded p-4 mb-4 flex bg-white hover:bg-gray-100 w-11/12 m-auto">
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
                <button className="bg-black-500 text-white px-2 py-1 rounded">
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