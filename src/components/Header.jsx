import React, { useState, useContext } from "react";
import ICON_MENU from "@icons/icon_menu.svg";
import LOGO_YARD_SALE from "@logos/logo_yard_sale.svg";
import ICON_SHOPPING_CART from "@icons/icon_shopping_cart.svg";
import Menu from "@components/Menu";
import MyOrder from "@containers/MyOrder";
import AppContext from "../context/AppContext";
import "@styles/Header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <img src={ICON_MENU} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={LOGO_YARD_SALE} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src={ICON_SHOPPING_CART} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
