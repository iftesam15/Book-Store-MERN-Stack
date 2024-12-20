import React, { useContext } from "react";
import { CartContext } from "./CartContext/CartContext";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + parseInt(b.price), 0);
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      <ol className="list-decimal list-inside space-y-4">
        {cart.items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cart.items.map((item) => (
            <li key={item.name} className="flex gap-4 border-b pb-2">
              <div>
                <h5 className="text-lg font-medium inline">{item.name}</h5>
                <button className="bg-gray-300 ms-2 p-2 rounded-md text-sm ">
                  X
                </button>
                <p className="text-sm text-gray-700">Price: ${item.price}</p>
              </div>
            </li>
          ))
        )}
      </ol>
      <p>Total Bill: {total} $</p>
    </div>
  );
};

export default Cart;
