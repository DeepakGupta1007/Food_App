import React from 'react'
import ReactDOM from 'react-dom/client';
import "/index.css"
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter ,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout =()=>{
    return(
        
        <div className='app'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
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
                path: "/restaurants/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement :<Error/>
    }
    
]);

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);