import React from "react";
import "./cart.scss";

const Cart = ({ shopListIcon }) => {
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

      {shopListIcon.map((item) => (
        <>
          <div className="cartComp">
            <div className="body">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <div className="price">{item.price}</div>
            <div className="btn">
              <button>REMOVE</button>
            </div>
          </div>
          <div className="hr">

            <hr />
          </div>
        </>
      ))}
    </div>
  );
};

export default Cart;
