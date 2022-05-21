import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  const deleteItem = (indexToDel) => {
    const newItems = items.filter((val, index) => {
      return index !== indexToDel;
    });
    setCartItems(newItems);
  };

  return (
    <div className="CartItems">
      <h1>Amazon </h1>
      <hr />
      <div className="CartItems-items">
        {items.map((item, indx) => (
          <CartItem
            item={item}
            key={indx}
            index={indx}
            changeItemQuantity={changeItemQuantity}
            deleteItem={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
