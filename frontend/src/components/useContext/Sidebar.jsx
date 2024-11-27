import React, { useContext } from "react";
import { DashboardContext, userUserContext } from "./Context";

export default function Sidebar() {
  const { user, setUser, food, setFood } = userUserContext(DashboardContext);
  const handleAdd = () => {
    setFood({
      ...food,
      quantity: food.quantity + 1,
      totalPrice: food.totalPrice + food.price,
    });
  };
  const handleReduce = () => {
    if (food.quantity > 0) {
      setFood({
        ...food,
        quantity: food.quantity - 1,
        totalPrice: food.totalPrice - food.price,
      });
    }
  };
  return (
    <>
      <div>
        <h1>Welcome, {user.name}</h1>
        <p>Your email: {user.email}</p>
        <p>Subscribed: {user.isSubscribed ? "true" : "false"}</p>
      </div>
      <div>
        <h2 className="text-blue-300 font-bold outline-dashed">Order Pizza</h2>
        <p>Name:{food.name}</p>
        <p>
          Price:{food.price} <span className="font-bold text-red-500">$</span>
        </p>
        <p className=" inline pr-1 ">Quantity: {food.quantity}</p>{" "}
        <button
          onClick={handleAdd}
          className="p-1 mr-3 bg-gray-200 rounded-md font-extrabold text-2xl text-center"
        >
          +
        </button>
        <button
          onClick={handleReduce}
          className="p-1 bg-gray-200 rounded-md font-extrabold text-2xl text-center"
        >
          -
        </button>
        <p className="font-extrabold">Total: {food.totalPrice.toFixed(2)}</p>
      </div>
    </>
  );
}
