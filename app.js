import React from 'react'
import ReactDOM from 'react-dom/client';
import "/index.css"
//Food ordering website
/*Components--
Header
    -Logo
    -Navbar
Body
    -Search component
    -Restaurant container
        -Restaurant card
            -Img
            -Name
            -Star
            -Cuisines
            -Time of delivery
Footer
    -Copyright
    -Links
    -Address
    -Contact

    A component is a function that returns a JSX object.
*/
//Another way of using CSS -Known as Inline CSS in react
const styleCard= {
    //Can also replace in place of call
    // backgroundColor:"grey",
};

//Components
const Header= ()=>{
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" className="image-resize"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Contact Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

//List of Dummy Data
const listObj=[
    {
          "card": {
            "info": {
              "id": "1231249",
              "name": "Veg Manchurian",
              "category": "Starters",
              "cloudinaryImageId": "rtwur61geujfywo0xs0h",
              "isVeg": 1,
              "price": 14000,
              "ratings": {
                "aggregatedRating": {
                  "rating": "4.5",
                  "ratingCount": "13 ratings",
                  "ratingCountV2": "13"
                }
              }
            },
        }
    },
    {
          "card": {
            "info": {
              "id": "1231250",
              "cloudinaryImageId": "rtwur61geujfywo0xs0h",
              "name": "Gobi Manchurian",
              "category": "Starters",
              "imageId": "oovcmyi2pbchv3ue5xmz",
              "isVeg": 1,
              "price": 14000,
              "ratings": {
                "aggregatedRating": {
                  "rating": "3.3",
                  "ratingCount": "50 ratings",
                  "ratingCountV2": "50"
                }
              }
            },
        }
    },
    {
          "card": {
            "info": {
                "cloudinaryImageId": "rtwur61geujfywo0xs0h",
              "id": "13959307",
              "name": "Chilli Gobi",
              "category": "Starters",
              "isVeg": 1,
              "price": 14000,
              "ratings": {
                "aggregatedRating": {
                    "rating": "3.3",
                    "ratingCount": "50 ratings",
                    "ratingCountV2": "50"
                }
              }
            },
        }
    },
    {
          "card": {
            "info": {
              "cloudinaryImageId": "rtwur61geujfywo0xs0h",
              "id": "1231251",
              "name": "Baby corn Chilli Pepper",
              "category": "Starters",
              "isVeg": 1,
              "price": 14000,
              "ratings": {
                "aggregatedRating": {
                  "rating": "3.9",
                  "ratingCount": "6 ratings",
                  "ratingCountV2": "6"
                }
              }
            }
        }
    }
];

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
        <div className="res-card" style ={styleCard}>
            <img className="restaurant-logo" 
            src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            alt='Not Found'></img>
            <h3>{name ? name : "Unknown"}</h3>
            <h6>{price ? price : "Unknown"}</h6>
            <h6>{rating} Stars</h6>
            <h6>{ratingCount}</h6>
        </div>
    )
}

const Body = ()=>{
    return (
    <div className="body">
        <div className='search'>
            Search
        </div>
        <div className='restaurant-container'>
            {listObj.map((data => (<RestaurantCard resData={data} key={data.card.info.id}></RestaurantCard>)))}
        </div>
    </div>
    )
}
const AppLayout =()=>{
    return(
        <div className='app'>
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout></AppLayout>);