import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Rescategorycell from "./Rescategorycell";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(clearCart());
    }
    //here we are  subscribing to a single store only. We can subscribe whole store also but it 
    //is not effiecient. Because when anything changes inside the store, my cart component will get update for the whole 
    //store which has nothing to do with the the other slices.Always subscribe to the small
    //part of the store.
    const cartItems = useSelector((store)=>store.cart.items);
    
    return (
        <div className="text-center m-4 p-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-9/12 m-auto">
            <button className="p-2 m-5 bg-green-400 rounded-lg" onClick={()=>handleClick()}>Clear Cart</button>
            {cartItems.length==0 ?<h1> Add Items </h1>:cartItems.map((cell,index)=>(
                <Rescategorycell data={cell} key={index}></Rescategorycell>
            ))}
            
        </div>
        </div>
    )
}

export default Cart;