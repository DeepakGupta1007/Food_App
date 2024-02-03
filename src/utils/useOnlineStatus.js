//What is the input of the hook -Here we dont need.

import { useEffect, useState } from "react";


const useOnlineStatus =()=>{

    const [onlineStatus,setonlineStatus]=useState(true);
    //Check if it is online
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
        });
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        });

    },[])

    
    //boolean
    return onlineStatus;
}

export default useOnlineStatus;