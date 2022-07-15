import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import flag from "./images/USflag.svg";

import footer from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footer_wrapper}>
      <div className={footer_search_wrapper}>
        <div className={search_para_wrapper}>
          <p>
            <span className={icon}>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            Get up to $100 off* your first order when you sign up for emails
          </p>
        </div>
        <div className={search_btn}>
          <input type="text" placeholder="Enter Email Address" />
          <button>Sign Up</button>
        </div>
      </div>
      {/* footer search ends  */}
      <div className={footer_links_wrapper}>
        <div className={footer_links}>
          <h3>Get To Know Us</h3>
          <Link to="/" className={footer.links}>
            About Ashley
          </Link>
          <Link to="/" className={footer.links}>
            Our History
          </Link>
          <Link to="/" className={footer.links}>
            About Ashley Furniture Industries
          </Link>
          <Link to="/" className={footer.links}>
            Careers
          </Link>
          <Link to="/" className={footer.links}>
            News
          </Link>
          <Link to="/" className={footer.links}>
            Social Responsibility
          </Link>
          <Link to="/" className={footer.links}>
            Store Locations
          </Link>
          <Link to="/" className={footer.links}>
            Trade Program
          </Link>
        </div>
        <div className={footer_links}>
          <h3>Customer Care</h3>
          <Link to="/" className={footer.links}>
            Help Center
          </Link>
          <Link to="/" className={footer.links}>
            Apply for Financing
          </Link>
          <Link to="/" className={footer.links}>
            Prequalify for Financing
          </Link>
          <Link to="/" className={footer.links}>
            Lease to Own Option
          </Link>
          <Link to="/" className={footer.links}>
            Buy Now Pay Later
          </Link>
          <Link to="/" className={footer.links}>
            Returns
          </Link>
          <Link to="/" className={footer.links}>
            Accessibility
          </Link>
          <Link to="/" className={footer.links}>
            Consumer Notifications
          </Link>
          <Link to="/" className={footer.links}>
            FAQ
          </Link>
          <Link to="/" className={footer.links}>
            Price Match
          </Link>
          <Link to="/" className={footer.links}>
            Child Safety
          </Link>
          <Link to="/" className={footer.links}>
            Warranty Information
          </Link>
          <Link to="/" className={footer.links}>
            Product Care & Cleaning
          </Link>
          <Link to="/" className={footer.links}>
            Furniture Protection Plan
          </Link>
        </div>
        <div className={footer_links}>
          <h3>Get Inspired</h3>
          <Link to="/" className={footer.links}>
            Blog
          </Link>
          <Link to="/" className={footer.links}>
            Home Ideas
          </Link>
          <Link to="/" className={footer.links}>
            Digital Catalog
          </Link>
          <Link to="/" className={footer.links}>
            3D Room Design
          </Link>
          <Link to="/" className={footer.links}>
            Hope to Dream
          </Link>
          <Link to="/" className={footer.links}>
            Refer a Friend
          </Link>
          <Link to="/" className={footer.links}>
            Design Services
          </Link>
        </div>
      </div>
      {/* footer links ends  */}
      <div className={footer_bottom_links}>
        <div className={country}>
          <img src={flag} alt="flag" />
          <Link to="/" className={footer.links}>
            United States
          </Link>
        </div>
        <div className={footer_bottom_link_items}>
          <Link to="/" className={footer.links}>
            Offers & Details*
          </Link>
          <Link to="/" className={footer.links}>
            Terms & Conditions
          </Link>
          <Link to="/" className={footer.links}>
            Terms of Use
          </Link>
          <Link to="/" className={footer.links}>
            Privacy Policy
          </Link>
          <Link to="/" className={footer.links}>
            Interest-Based Ads
          </Link>
          <Link to="/" className={footer.links}>
            Do not sell my Personal Information
          </Link>
        </div>
      </div>
      {/* footer bottom links ends here  */}
    </div>
  );
};

export default Footer;
