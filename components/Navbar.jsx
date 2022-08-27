import React from "react";
import Link from "next/link";
import { AiOutlineMobile } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import NavbarSearch from "./NavbarSearch";
import NavbarLinks from "./NavbarLinks";
import NavbarSearchResponsive from "./NavbarSearchResponsive"

import navbar from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbar.navbar_wrapper}>
      <div className={navbar.navbar_kids_page_navigator_wrapper}>
        <div className={navbar.header}>
          <p className={navbar.ashley}>Ashley</p>
          <p className={navbar.baby}>Baby & Kids</p>
        </div>
        {/* <div className={navbar.mobile_app}>
          <p className={navbar.icon}>
            <AiOutlineMobile />
          </p>
          <p>Mobile App</p>
        </div> */}
      </div>
      {/* baby ends  */}
      <div className={navbar.navbar_features}>
        <div className={navbar.features_items + " " + navbar.yellow}>
          <h3>In Stock and Ready to Ship</h3>
          {/* <div className={navbar.links_div}>
            <Link href="/" className={navbar.links}>
              <a>Shop Now</a>
            </Link>
          </div> */}
        </div>
        <div className={navbar.features_items + " " + navbar.grey}>
          <h3>Save upto $200 on selected Dining Sets - Online Only</h3>
          {/* <div className={navbar.links_div}>
            <Link href="/" className={navbar.links}>
              <a>Shop Now</a>
            </Link>
          </div> */}
        </div>
        <div className={navbar.features_items + " " + navbar.light_grey}>
          <h3>Extra 10% off* Desks!</h3>
          {/* <div className={navbar.links_div}>
            <Link href="/" className={navbar.links}>
              <a>Shop Now</a>
            </Link>
          </div> */}
        </div>
      </div>
      <NavbarSearch />
      <NavbarSearchResponsive />
      <NavbarLinks />
      <div className={navbar.navbar_chat}>
        <p>
          <span className={navbar.icon}>
            <FaComment />
          </span>
          chat with a personal online sales assistant
        </p>
      </div>
      <div className={navbar.discount_line}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora
      </div>
    </div>
  );
};

export default Navbar;
