import { LOGO_URL } from "../utils/constants"
import { useState } from "react";
import {Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{



   const [changeBtn, setChangeBtn] = useState(true);

   const onlineStatus = useOnlineStatus();
   console.log(onlineStatus)

    return (
        <div className="flex justify-between sticky top-0 bg-pink-100 z-50 backdrop-blur-xs shadow-sm border-rose-100 border-2 rounded-md mt-3 m-3">
            <div className="w-2xl">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div>
                <ul className="flex m-8 gap-6">
                    <li >Online status {onlineStatus ? "✅":"❌"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About us</Link></li>
                    <li> <Link to="/contact">Contact US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{setChangeBtn(!changeBtn)}}>{changeBtn ? 'Login':'Logout'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;