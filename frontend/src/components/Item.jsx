import React from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext/CartContext";
const Item = (props) => {
  const cart = useContext(CartContext);
  console.log("cart", cart);

  const handleClick = () => {
    const itemExists = cart.items.some((item) => item.name === props.name);
    if (!itemExists) {
      cart.setItems([...cart.items, { name: props.name, price: props.price }]);
    } else {
      alert("This item is already in the cart.");
    }
  };
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-bold">{props.name}</h4>
      <p>Price: $ {props.price}</p>
      <button onClick={handleClick} className="p-2 rounded-md bg-blue-400">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
