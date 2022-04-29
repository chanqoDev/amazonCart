import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ title }) {
  return (
    <div className="CartItems">
      <h1>{title}</h1>
      <hr />
      <div className="CartItems-items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
}

export default CartItems;
