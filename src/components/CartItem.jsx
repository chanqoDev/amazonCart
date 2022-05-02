import React from "react";
import "./CartItem.css";

function CartItem({ item }) {
  console.log(item.image);
  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img src={process.env.PUBLIC_URL + "./items/" + item.image} alt="" />
        {/* <img src={process.env.PUBLIC_URL + "/yourPathHere.jpg"} /> */}
      </div>
      <div className="CartItem-info">
        <div className="Info-title">
          <h2>{item.title}</h2>
        </div>
        <div className="Info-stock">{item.stock}</div>
        <div className="Item-actions">
          <div className="Item-quantity">
            <select value={item.quantity}>
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
            </select>
          </div>
          <div className="items-actions-divider">|</div>
          <div className="Item-delete">Delete</div>
        </div>
      </div>
      <div className="CartItem-price">{item.price}</div>
    </div>
  );
}

export default CartItem;
