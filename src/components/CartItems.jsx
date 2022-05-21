import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items, setCartItems }) {
  const changeItemQuantity = (e, index) => {
    // When we select a quanity on item, we pass it in here
    // pass in the index
    // using the index we need to change the quanity to the selected on form select option
    // then we need to update the items state, because the state is inside our useState;
    // console.log(e.target.value);
    console.log("index", index);

    // DO NOT UPDATE THE STATE WIHTOUT A SETTER FUNCTION IN REACT
    // this will create a deep clone, COnstruct and assing to an array that is a deep copy clone
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
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
          />
        ))}
      </div>
    </div>
  );
}

export default CartItems;
