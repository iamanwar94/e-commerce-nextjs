import React from "react";
import Link from 'next/link'
import navsearch from "../styles/NavbarSearch.module.scss";
import logo from "./assets/Ashley-Logo-Vertical.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const NavbarSearch = () => {
  return (
    <div className={navsearch.navbar_search_wrapper}>
      <div className={navsearch.logo}>
        <Link href="/">
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
          <FiSearch/>
        </div>
      </div>
      <div className={navsearch.navbar_links_wrapper}>
        <p>
          <Link href="/login" className={navsearch.links}>
            Login Account
          </Link>
        </p>
        <p>
          <Link href="/login" className={navsearch.links}>
            Delivery Tracking
          </Link>
        </p>
        <p>
          <Link href="/" className={navsearch.links}>
            Prequalify for Financing
          </Link>
        </p>
        <div className={navsearch.icon_wrapper}>
          <Link href="/cart">
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
