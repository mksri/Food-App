import React from "react";
import ReactDOM from "react-dom/client";


const HeaderComponent = () =>{
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact US</li>
                    <li> Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurentCard = () =>{
    return(
        <div className="res-card" style={{backgroundColor: "yellow "}}>
            <img className="food-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/aqsnrylokzpn45qhg1pb" alt="Mh"></img>
           <span> <h3>Meghana Foods</h3>   
            <h3>Cuisine</h3>
            <h3>4.5 stars</h3>
            <h3>38 mins</h3></span>    
        </div>
    )
}
const BodyComponent = () =>{
    return(
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="res-container"><RestaurentCard/></div>          
        </div>
    )
}

const AppLayout = () => {
    return (
    <div>
   <HeaderComponent/>
  <BodyComponent/>


    </div>
    
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);