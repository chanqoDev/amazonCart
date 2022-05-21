import React from "react";
import "./CartTotal.css";
import NumberFormat from "react-number-format";

const CartTotal = ({ items }) => {
  const getTotalPrice = () => {
    let total = 0;

    items.forEach((item) => {
      total = item.price * item.quantity;
    });

    return total;
  };
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="CartTotal">
      <h3>
        Subtotal({totalItems} items):
        <div className="cartTotal-price">
          <NumberFormat
            value={getTotalPrice()}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </div>
      </h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartTotal;
