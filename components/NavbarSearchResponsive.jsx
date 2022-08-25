import React, { useState } from "react";
import responsivenavsearch from "../styles/NavbarsearchResponsive.module.scss";
import Link from "next/link";
import Image from "next/image";
import newashlylogo from "./assets/newashlylogo.png";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import NavbarLinksResponsive from "./NavbarLinksResponsive";

import { BiSearchAlt2 } from "react-icons/bi";

const NavbarSearchResponsive = () => {
  const [serchbar, setSearchbar] = useState(false);

  const toggleClass = () => {
    setSearchbar(!serchbar);
  };

  // const serachtoggle = serchbar
  //   ? responsivenavsearch.input_search
  //   : responsivenavsearch.input_search_two;

  const serachtoggle = serchbar
    ? responsivenavsearch.input_search_two
    : responsivenavsearch.input_search;


  return (
    <div className={responsivenavsearch.responsive_navbar_search_wrapper}>
      <NavbarLinksResponsive />

      <div className={responsivenavsearch.logo}>
        <Link href="/">
          <a>
            <Image src={newashlylogo} alt="logo" className={responsivenavsearch.img} />
          </a>
        </Link>
      </div>

      <div className={responsivenavsearch.search_box}>
        <button className={responsivenavsearch.btn_search}>
          <BiSearchAlt2 onClick={toggleClass} />
        </button>
        <input type="text" 
        className={serachtoggle} 
        placeholder="Search" />
      </div>
      <div className={responsivenavsearch.navbar_links_wrapper}>
        {/* one */}
        <div className={responsivenavsearch.icon_wrapper}>
          <Link href="/cart">
            <a className={responsivenavsearch.cart_icon}>
              <GoLocation className={responsivenavsearch.icon} />
            </a>
          </Link>
        </div>
        {/* two */}
        <div className={responsivenavsearch.icon_wrapper}>
          <Link href="/cart">
            <a className={responsivenavsearch.cart_icon}>
              <AiOutlineShoppingCart className={responsivenavsearch.icon} />
              <span className={responsivenavsearch.badge}>0</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearchResponsive;
