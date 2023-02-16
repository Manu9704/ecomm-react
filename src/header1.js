import "../src/header1.css";
import {GiRecycle} from "react-icons/gi";
import {BsSuitHeart} from "react-icons/bs";
import {BsCart} from "react-icons/bs";
import {BsPerson} from "react-icons/bs";
import {BiCategory} from "react-icons/bi";
import {HiOutlineFire} from "react-icons/hi";
import {TbHeadset} from "react-icons/tb";
import {BiChevronDown} from "react-icons/bi";

const Header=()=>{
    return(
        <div id="body">
            <div id="fhead">
                <div id="ffdiv">
                    <ul id="fful">
                        <li>About Us</li>
                        <li>|</li>
                        <li>My Account</li>
                        <li>|</li>
                        <li>Wishlist</li>
                        <li>|</li>
                        <li>Order Tracking</li>
                    </ul>
                </div>
                <div id="transtext">
                    <p>100% Secure delivery without contacting the courier</p>
                </div>
                <div id="fldiv">
                    <ul id="flul">
                        <li>Need help? Call Us:<span>+1800900122</span></li>
                        <li>|</li>
                        <li>English</li>
                        <li>|</li>
                        <li>INR</li>
                    </ul>
                </div>
            </div>
            <div id="shead">
                <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png" alt=""/>
                <div id="searchbox">
                    <input placeholder="Search for products..."/>
                    <button id="search">Search</button>
                </div>
                <button id="vbtn">Become Vendor &rarr;</button>
                <div id="shbtndiv">
                <button id="combtn"><GiRecycle/>Compare</button>
                <button id="wishbtn"><BsSuitHeart/>Wishlist</button>
                <button id="cartbtn"><BsCart/>Cart</button>
                <button id="accbtn"><BsPerson/>Account</button>
                </div>
            </div>
            <div id="thead">
                <button id="bacbtn"><BiCategory/>Browse All Categories </button>
                <a href=""><HiOutlineFire/>Hot Deals</a>
                <ul>
                    <li>Home<BiChevronDown/></li>
                    <li>About</li>
                    <li>Shop<BiChevronDown/></li>
                    <li>Vendors<BiChevronDown/></li>
                    <li>Mega Menu<BiChevronDown/></li>
                    <li>Blog<BiChevronDown/></li>
                    <li>Pages<BiChevronDown/></li>
                    <li>Contact</li>
                </ul>
                <div id="support">
                    <TbHeadset/>
                    <div>
                        <h2>1900888123</h2>
                        <p>24/7 Support Center</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header