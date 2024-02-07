import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :'cart',
    initialState:{
        items:[]
    },
    reducers:{
        //We are mutating the state over here.
        //Actually modifies the data inside the slices
        addItem :(state,action)=>{
            console.log(current(state));
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,actions)=>{
            //RTK- says either mutate the state or return new state(that will replace) return{items:[]}.
            state.items.length=0;
            //state.items=[] This will not work.
        }

    }

});




export default cartSlice.reducer;//This reducer is the combination of small reducer functions
export const {clearCart,addItem,removeItem}= cartSlice.actions;