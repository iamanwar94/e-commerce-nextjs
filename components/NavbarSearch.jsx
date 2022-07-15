import React from "react";
import navsearch from "./NavbarSearch.module.scss";
import logo from "../images/Ashley-Logo-Vertical.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavbarSearch = () => {
  return (
    <div className={navsearch.navbar_search_wrapper}>
      <div className={navsearch.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      {/* <div className={navsearch.zip">
        <p>Your closest Ashley</p>
        <h5>Please Enter Zip Code</h5>
      </div> */}
      <div className={navsearch.navbar_search_input}>
        <input type="text" placeholder="Search..." />
        <div className={navsearch.icon}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className={navsearch.navbar_links_wrapper}>
        <p>
          <Link to="/login" className={navsearch.links}>
            Login Account
          </Link>
        </p>
        <p>
          <Link to="/login" className={navsearch.links}>
            Delivery Tracking
          </Link>
        </p>
        <p>
          <Link to="/" className={navsearch.links}>
            Prequalify for Financing
          </Link>
        </p>
        <div className={navsearch.icon_wrapper}>
          <Link to="/cart">
            <span className={navsearch.cart_icon}>
              <AiOutlineShoppingCart className={navsearch.icon} />
              <span className={navsearch.badge}>0</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
