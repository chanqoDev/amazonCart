import React from "react";
import "./CartItem.css";

function CartItem() {
  const t = "It works, CAP";

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
        <div className="Info-stock">In stock</div>
        <div className="Item-actions">
          <div className="Item-quantity">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <div className="Item-delete">Delete</div>
      </div>
      <div className="CartItem-price">$769.00</div>
    </div>
  );
}

export default CartItem;
