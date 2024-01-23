import React from "react";
import "./cart.scss";

const Cart = ({ shopListIcon, onRemove }) => {
  return (
    <div className="cart">
      <div className="headers">
        <div className="left width">
          <h1>ITEM</h1>
          <hr />
        </div>
        <div className="middle width">
          <h1>PRICE</h1>
          <hr />
        </div>
        <div className="right width">
          <h1>DOING</h1>
          <hr />
        </div>
      </div>

      {shopListIcon.map((item,index) => (
        <div className="cartComp" key={index}>
          <div className="body">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
          <div className="price">{item.price}</div>
          <div className="btn">
            <button value={item.id} onClick={(id) => onRemove(item.id)}>
              REMOVE
            </button>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Cart;
