import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiHomeLine } from "react-icons/ri";
import flag from "./assets/USflag.svg";
import footer from "../styles/Footer.module.scss";
import { ImMobile } from "react-icons/im";
import FooterAccordion from "./FooterAccordion";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

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
        <FooterAccordion />
      </div>

      {/* footer search ends  */}
      <div className={footer.footer_links_wrapper}>
        <div className={footer.footer_links}>
          <h3>Get To Know Us</h3>
          <div className={footer.address_links}>
            <GoLocation />
            <span>Philadelphia</span>
          </div>
          <div className={footer.address_links}>
            <BsTelephone />
            <span>215-352-1600</span>
          </div>
          <div className={footer.address_links}>
            <GoMail />
            <span>meccacustomercare@gmail.com</span>
          </div>
        </div>
        <div className={footer.footer_links}>
          <h3>Customer Care</h3>
          <Link href="/contact" className={footer.links}>
            <a>Contact Us</a>
          </Link>
          <Link href="/shipping" className={footer.links}>
            <a>Shipping & Delivery</a>
          </Link>
          <Link href="/financing" className={footer.links}>
            <a>Financing</a>
          </Link>
          <Link href="/termsCondition" className={footer.links}>
            <a>Terms & Condition</a>
          </Link>
          <Link href="/faqs" className={footer.links}>
            <a>FAQ</a>
          </Link>
        </div>
        <div className={footer.footer_links}>
          <h3>About Furniture Mecca</h3>
          <Link href="/about" className={footer.links}>
            <a>About Us</a>
          </Link>
          <Link href="/career" className={footer.links}>
            <a>Career</a>
          </Link>
          <Link href="/location" className={footer.links}>
            <a>Store Locations</a>
          </Link>
          <Link href="/login" className={footer.links}>
            <a>My Account</a>
          </Link>
          <Link href="/comunitygiving" className={footer.links}>
            <a>Community Giving</a>
          </Link>
        </div>
      </div>

      {/* logo_links */}
      <div className={footer.logo_links}>
        <div className={footer.copywright}>
          <AiOutlineCopyrightCircle className={footer.copywright_logo} />
          Furniture Mecca. All Rights Reserved. myfurnituremecca.com
        </div>
        <div className={footer.logo_div}>
          {/* <Link href="/"> */}
          <a>
            <GrFacebook className={footer.logo} />
          </a>
          {/* </Link> */}

          {/* <Link href="/"> */}
          <a>
            <FaTwitterSquare className={footer.middle_logo} />
          </a>
          {/* </Link> */}
          {/* <Link href="/"> */}
          <a>
            <BsLinkedin className={footer.logo} />
          </a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
