import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items }) {
  return (
    <div className="CartItems">
      <h1>Amazon </h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, index) => (
          <CartItem key={index} />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
