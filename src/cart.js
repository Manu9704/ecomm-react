import React from "react";
import "../src/cart.css";
import {FiHome} from "react-icons/fi";
import {TiTick} from "react-icons/ti"


const Cart=()=>{
    return(
        <div id="cartui">
            <div id="shopcart">
        <div id="title">
            <h1>Shop Cart</h1>
            <span>
                <button><FiHome/>Home</button>
                <p>Shop Cart</p>
            </span>
        </div>
        <div id="btncont">
            <button>Breakfast</button>
            <button>Dairy Free</button>
            <button>Dessert</button>
            <button>Gluten Free</button>
            <button>Salad</button>
            <button>Uncategorized</button>
        </div>
    </div>
    <div id="cu">
        <TiTick/>
        <p>Cart updated.</p>
    </div>
    <div id="carthead">
       <table cellspacing="0" id="carttable">
        <tr id="tablehead">
            <th style="width: 50%;">Product</th>
            <th style="width: 12%;">Price</th>
            <th style="width: 19%;">Quantity</th>
            <th style="width: 19%;">Subtotal</th>
        </tr>
       </table>
       <div id="coupup">
        <div id="coup">
            <input type="text" placeholder="Coupon code"/>
            <button>Apply Coupon</button>
        </div>
        <button>Update cart</button>
       </div>
    </div>
    <div id="totals">
        <div id="totalsdiv">
            <h2>Cart totals</h2>
            <table cellspacing="0">
                <tr>
                    <td style="width: 50%;">Subtotal</td>
                    <td></td>
                </tr>
                <tr>
                    <td style="width: 50%;">Total</td>
                    <td></td>
                </tr>
            </table>
            <button>Proceed to checkout</button>
        </div>
    </div>
        </div>
    )
}
export default Cart