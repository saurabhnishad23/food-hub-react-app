import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItemCard";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  const clearItem = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div>
        <h1>Cart Items - {cartItems.length}</h1>
        <button className="p-2 m-2 bg-slate-700" onClick={() => clearItem()}>
          Clear Cart
        </button>
      </div>
      <div className="bg-gray-500 flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.card.info} {...item.card.info} />
        ))}
        <button
          className="bg-gray-500 flex flex-wrap"
          onClick={() => handleRemoveItem()}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Cart;
