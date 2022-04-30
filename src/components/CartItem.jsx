import React from "react";
import "./CartItem.css";

function CartItem() {
  const t = "LITTLE RED BASEBALL CAP";

  return (
    <div className="CartItem">
      <div className="CartItem-image">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F718hq5Fb04L._AC_UL1200_.jpg&f=1&nofb=1"
          alt=""
        />
      </div>
      <div className="CartItem-info">
        <div className="Info-title">
          <h2>{t}</h2>
        </div>
        <div className="Info-stock">In Stock</div>
        <div className="Item-actions">
          <div className="Item-quantity">
            <select>
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
      <div className="CartItem-price">$69.00</div>
    </div>
  );
}

export default CartItem;
