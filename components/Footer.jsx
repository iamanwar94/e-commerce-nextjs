import React from "react";
import Image from "next/image";
import Link from "next/link";

import { RiHomeLine } from "react-icons/ri";

import flag from "./assets/USflag.svg";

import footer from "../styles/Footer.module.scss";

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
      {/* footer search ends  */}
      <div className={footer.footer_links_wrapper}>
        <div className={footer.footer_links}>
          <h3>Get To Know Us</h3>
          <Link href="/" className={footer.links}>
            <a>About Ashley</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Our History</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>About Ashley Furniture Industries</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Careers</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>News</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Social Responsibility</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Store Locations</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Trade Program</a>
          </Link>
        </div>
        <div className={footer.footer_links}>
          <h3>Customer Care</h3>
          <Link href="/" className={footer.links}>
            <a>Help Center</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Apply for Financing</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Prequalify for Financing</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Lease to Own Option</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Buy Now Pay Later</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Returns</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Accessibility</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Consumer Notifications</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>FAQ</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Price Match</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Child Safety</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Warranty Information</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Product Care & Cleaning</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Furniture Protection Plan</a>
          </Link>
        </div>
        <div className={footer.footer_links}>
          <h3>Get Inspired</h3>
          <Link href="/" className={footer.links}>
            <a>Blog</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Home Ideas</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Digital Catalog</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>3D Room Design</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Hope to Dream</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Refer a Friend</a>
          </Link>
          <Link href="/" className={footer.links}>
            <a>Design Services</a>
          </Link>
        </div>
      </div>
      {/* footer links ends  */}
      <div className={footer.footer_bottom_links}>
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
      </div>
      {/* footer bottom links ends here  */}
    </div>
  );
};

export default Footer;
