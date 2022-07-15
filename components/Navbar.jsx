import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faComment } from "@fortawesome/free-solid-svg-icons";

import NavbarSearch from "./NavbarSearch/NavbarSearch";
import NavbarLinks from "./NavbarLinks/NavbarLinks";

import navbar from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={navbar.navbar_wrapper}>
      <div className={navbar.navbar_kids_page_navigator_wrapper}>
        <div className={navbar.header}>
          <p className={navbar.ashley}>Ashley</p>
          <p className={navbar.baby}>Baby & Kids</p>
        </div>
        <div className={navbar.mobile_app}>
          <p className={navbar.icon}>
            <FontAwesomeIcon icon={faMobileScreen} />
          </p>
          <p>Mobile App</p>
        </div>
      </div>
      {/* baby ends  */}
      <div className={navbar.navbar_features}>
        <div className={navbar.features_items + navbar.yellow}>
          <h3>In Stock and Ready to Ship</h3>
          <div className={navbar.links_div}>
            <Link to="/" className={navbar.links}>
              Shop Now
            </Link>
          </div>
        </div>
        <div className={navbar.features_items + navbar.grey}>
          <h3>Save upto $200 on selected Dining Sets - Online Only</h3>
          <div className={navbar.links_div}>
            <Link to="/" className={navbar.links}>
              Shop Now
            </Link>
          </div>
        </div>
        <div className={navbar.features_items + navbar.light - grey}>
          <h3>Extra 10% off* Desks!</h3>
          <div className={navbar.links_div}>
            <Link to="/" className={navbar.links}>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <NavbarSearch />
      <NavbarLinks />
      <div className={navbar.navbar_chat}>
        <p>
          <span className={navbar.icon}>
            <FontAwesomeIcon icon={faComment} />
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
