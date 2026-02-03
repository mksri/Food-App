import { LOGO_URL } from "../utils/constants"
import { useState } from "react";

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
                    <li>About us</li>
                    <li>Contact US</li>
                    <li> Cart</li>
                    <button className="login-btn" onClick={()=>{setChangeBtn(!changeBtn)}}>{changeBtn ? 'Login':'Logout'}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;