import { useState } from "react";
import { Logo } from "./config";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";
//Link is used for client side routing. page doesn't have to reload
const Title = () => (
  <Link to="/">
    <img
      data-testid="logo"
      className="h-24 mx-3 pl-2 py-2"
      alt="logo"
      src={Logo}
    />
  </Link>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(store.items);

  return (
    <div className="flex flex-wrap justify-between bg-yellow-300">
      <Title />
      {console.log(cartItems)}
      <div>
        <ul className=" flex py-10 px-10 lg:list-none">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>

          <li className="px-3">
            <Link to="/about">About</Link>
          </li>

          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="px-3">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li data-testid="cart" className="px-3">
            <Link to="/cart">Cart</Link> {cartItems.length}
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
