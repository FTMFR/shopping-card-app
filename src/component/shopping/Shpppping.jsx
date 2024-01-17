import React, { useState } from "react";
import "./shopping.scss";
import Cart from "./Cart";

const shopListIcon = [
  { id: 1, name: "Album 1", price: "56$", img: "./img/Album 1.png" },
  { id: 2, name: "Album 2", price: "6$", img: "./img/Album 2.png" },
  { id: 3, name: "Album 3", price: "20$", img: "./img/Album 3.png" },
  { id: 4, name: "Album 4", price: "71$", img: "./img/Album 4.png" },
  { id: 5, name: "Album 5", price: "80$", img: "./img/Cofee.png" },
  { id: 6, name: "Album 6", price: "18$", img: "./img/Shirt.png" },
];

const Shpppping = () => {
  const [store, setStore] = useState([]);

  const onClickHandler = (e) => {
    const index = e.target.value - 1;

    const listStore = {
      img: shopListIcon[index].img,
      name: shopListIcon[index].name,
      price: shopListIcon[index].price,
    };

    setStore([...store, listStore]);
  };

  return (
    <>
      <div className="contentSection">
        {shopListIcon.map((item) => (
          <div className="cont" key={item.id}>
            <p>{item.name}</p>
            <img src={item.img} alt={item.name} />
            <div className="footer">
              <div className="price">{item.price}</div>
              <button value={item.id} onClick={(e) => onClickHandler(e)}>
                Add to Card
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart shopListIcon={store} />
    </>
  );
};

export default Shpppping;
