import React, { useState } from "react";
import navbarlinkresponsive from "../styles/NavbarLinksResponsive.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import NavbarAccordion from "./NavbarAccordion";

const NavbarLinksResponsive = () => {
  const [showhide, setshowhide] = useState(false);
  // menubar show hide
  const contentClassname = showhide
    ? navbarlinkresponsive.menubar
    : navbarlinkresponsive.hide;

  const [menulisthide, setMenulisthide] = useState(true);

  const hidemenubar = menulisthide
    ? navbarlinkresponsive.shownavbarbylist
    : navbarlinkresponsive.hidenavbarbylist;

  return (
    <div>
      {/* hamberger start */}
      <div className={navbarlinkresponsive.menubar_wrapper}>
        <div className={navbarlinkresponsive.cart_icon}>
          <GiHamburgerMenu
            className={navbarlinkresponsive.icon}
            onClick={() => setshowhide(!showhide)}
          />

          <div
            className={contentClassname}
          >
            <div
              className={hidemenubar}
            >
              {/* parent one */}
              <div className={navbarlinkresponsive.button}>
                <button>Log In</button>
                <button>Delevery Tracking</button>
              </div>

              {/* parent two */}

              <div className={navbarlinkresponsive.zip}>
                <p>
                  <a>
                    <GoLocation />
                  </a>
                  Your Closet Ashley <span>Please Enter Zip Code</span>
                </p>

                <p className={navbarlinkresponsive.arrow}>
                  <RiArrowRightSLine />
                </p>
              </div>

              {/* parent three */}

              <div className={navbarlinkresponsive.links}>

                <div>
                  <NavbarAccordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hamberger end  */}
    </div>
  );
};

export default NavbarLinksResponsive;
