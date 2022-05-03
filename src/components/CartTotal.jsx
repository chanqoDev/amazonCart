import React from "react";
import "./CartTotal.css";

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    // init total price to 0
    let total = 0;
    // loop thorugh all the items in the cart
    items.forEach((item) => {
      total += item.price * item.quantity;
    });
    // add the price of the item with the quantitiy to the total price
    return total;
    // return the total price
  };
  return (
    <div className="CartTotal">
      <h3>
        Subtotal({items.length} items):
        <span className="cartTotal-price">${getTotalPrice()}</span>
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartTotal;
