import React from "react";
import "./CartTotal.css";

const CartTotal = () => {
  return (
    <div className="CartTotal">
      <h3>
        Subtotal(5 items): <span className="cartTotal-price">$2172.38</span>
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartTotal;
