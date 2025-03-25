import { LOGO_URL } from "../utils/constants";
import { useState , useEffect} from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
               <img className="w-56" src = {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "CONNECTED" :"NOT CONNECTED"} </li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    <li className="px-4"><Link to ="/about">About Us</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to ="/cart">Cart</Link></li>
                    <button className="Login w-20 px-4 bg-pink-300 border-black rounded-lg" onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
