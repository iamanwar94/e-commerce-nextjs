import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import flag from "./assets/USflag.svg";
import footer from "../styles/Footer.module.scss";
import { ImMobile } from "react-icons/im";
import FooterAccordion from "./FooterAccordion";

const Footer = () => {
  return (
    <div className={footer.footer_wrapper}>
      <div className={footer.footer_search_wrapper}>
        <div className={footer.search_para_wrapper}>
          <p>
            <span className={footer.icon}>
              <RiHomeLine />
            </span>
            Get up to $100 off* your first order when you sign up for emails
          </p>
        </div>
        <div className={footer.search_btn}>
          <input type="text" placeholder="Enter Email Address" />
          <button>Sign Up</button>
        </div>
      </div>

      {/* for mobile */}
      <div className={footer.mobile_Links}>
        {/* <div className={footer.mobile}>
          <div><ImMobile /></div>
          <h6>Mobile apps</h6>
        </div> */}
        <FooterAccordion />
        {/* <div className={footer.mobile_country}>
          <div className={footer.img}>
            <Image src={flag} alt="flag" />
          </div>
          <h6>United State</h6>
        </div> */}
      </div>

      {/* footer search ends  */}
      <div className={footer.footer_links_wrapper}>
        <div className={footer.footer_links}>
          <h3>Get To Know Us</h3>
          <Link href="/" className={footer.links}>
            <a>Offers & Details</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Terms and Condition</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Terms of Use</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Privacy Policy</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Interest-Based Adds</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Don not sell my Personal Information</a>
          </Link>
        </div>
        <div className={footer.footer_links}>
          <h3>Customer Care</h3>
          <Link href="/" className={footer.links}>
            <a>Contact Us</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Shipping & Delivery</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Financing</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Terms & Conditions</a>
          </Link>
        </div>
        <div className={footer.footer_links}>
          <h3>About Furniture Mecca</h3>
          <Link href="/" className={footer.links}>
            <a>About Us</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Career</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Store Locations</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Reviews</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>My Account</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Community Giving</a>
          </Link>
        </div>
      </div>
      {/* footer links ends  */}
      {/* <div className={footer.footer_bottom_links}>
        <div className={footer.country}>
          <Image src={flag} alt="flag" />
          <Link href="/" className={footer.links}>
            <a>United States</a>
          </Link>
        </div>
        <div className={footer.footer_bottom_link_items}>
          <Link href="/" className={footer.links}>
            <a>Offers & Details*</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Terms & Conditions</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Terms of Use</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Privacy Policy</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Interest-Based Ads</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Do not sell my Personal Information</a>
          </Link>
        </div>
      </div> */}
      {/* footer bottom links ends here  */}
    </div>
  );
};

export default Footer;
