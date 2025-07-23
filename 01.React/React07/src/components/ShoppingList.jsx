import React from "react";
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((prevValue) => [...prevValue, newItem]);
    setName("");
    setQuantity("");
  };
  return (
    <>
      <div>
        <h2>Shopping Cart</h2>
        <form onSubmit={submitHandler}>
          <label>
            Item Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Item Quantity:
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        <h2>Shopping List</h2>
        <p>
          {items.map((i, index) => (
            <li key={index}>
              Name:{i.name}, Quantity: {i.quantity}
            </li>
          ))}
        </p>
      </div>

      <br />
      <br />
    </>
  );
};

export default ShoppingList;
