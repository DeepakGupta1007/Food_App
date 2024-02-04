import React from "react";
import Rescategorycell from "./Rescategorycell";

const Rescategories =({data,showItems,setShowIndex,disableThis})=>{

    const handleToggle = () => {
        setShowIndex();
    };
    const cellData = data?.itemCards;
    
    return (
        <div className="border rounded mx-auto my-5 w-9/12 ">
        <div className="flex items-center justify-between p-4 bg-gray-300 text-black " onClick={handleToggle} >
            <h1 className="text-xl font-semibold">{data?.title} ({data?.itemCards.length})</h1>
            <span className="text-xl">&#9660;</span> {/* Unicode character for down arrow */}
        </div>
        {showItems && (
            cellData.map((cell,index)=>(
                <Rescategorycell data={cell} key={index}></Rescategorycell>
            ))
        )}
        </div>
        //On changing the boolean from parent it is now controlled previously it was uncontrolled component
    );
}

export default Rescategories;