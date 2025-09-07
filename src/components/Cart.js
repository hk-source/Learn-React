import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>

      {cartItems?.length === 0 ? (
        <h1> Cart is empty. Add Items to the cart!</h1>
      ) : (
        <button
          className="p-2 m-2 bg-black text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Cart;
