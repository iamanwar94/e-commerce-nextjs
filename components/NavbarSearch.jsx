import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCart } from "../App/Features/cartSlice";
import navsearch from "../styles/NavbarSearch.module.scss";
import logo from "../components/assets/m_logo_360.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import CartItems from "./CartItems";

const NavbarSearch = () => {
  const selectCartDetail = useSelector(selectCart);
  const cartCount = selectCartDetail.length;

  return (
    <div className={navsearch.navbar_search_wrapper}>
      <div className={navsearch.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="logo" className={navsearch.img} />
          </a>
        </Link>
      </div>
      <div className={navsearch.zip}>
        <p>Your closest Ashley</p>
        <h5>Please Enter Zip Code</h5>
      </div>
      <div className={navsearch.navbar_search_input}>
        <input type="text" placeholder="Search..." />
        <div className={navsearch.icon}>
          <FiSearch />
        </div>
      </div>
      <div className={navsearch.navbar_links_wrapper}>
        <p>
          <Link href="/login" className={navsearch.links}>
            <a>Login Account</a>
          </Link>
        </p>
        <p>
          <Link href="/deliverytracking" className={navsearch.links}>
            <a>Delivery Tracking</a>
          </Link>
        </p>
        <div className={navsearch.icon_wrapper}>
          <Link href="/cart">
            <a>
              <span className={navsearch.cart_icon}>
                <AiOutlineShoppingCart className={navsearch.icon} />
                <span className={navsearch.badge}>{cartCount}</span>
              </span>
            </a>
          </Link>
          <div className={navsearch.cart_detail}>
            <CartItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
