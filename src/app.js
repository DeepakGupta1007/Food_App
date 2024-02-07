import React, { useEffect, useState } from 'react'
import { lazy,Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "/index.css"
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter ,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

//Here we will not import Grocry component , instead of this we will do lazy loading.
//Or we will do on demand loading.
const Grocery =lazy(()=>
    import('./components/Grocery'));
//You will get a new js file in network.

function AppLayout() {
    const [userInfo,setUserInfo]=useState("");
    useEffect(()=>{
        const data={
            name:"Deepak Gupta",
        }

        setUserInfo(data.name);

    },[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
        <div className='app'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    );
}



const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path :"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "contact",
                element: <Contact/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/grocery",
                element:(<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>)
            },
            {
                path: "/restaurants/:resId",
                element: (<RestaurantMenu></RestaurantMenu>)
            }
        ],
        errorElement :<Error/>
    }
    
]);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);