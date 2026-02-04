import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import {Link } from "react-router-dom";

const Header = () =>{


   const [changeBtn, setChangeBtn] = useState(true);

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>
                        <Link to="/about">About us</Link></li>
                    <li> <Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{setChangeBtn(!changeBtn)}}>{changeBtn ? 'Login':'Logout'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;