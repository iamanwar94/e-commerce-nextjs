import React, { useState } from "react";
import navbarlinkresponsive from "../styles/NavbarLinksResponsive.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import flag from "./assets/USflag.svg";
import Link from "next/link";
import Image from "next/image";
import NavbarAccordion from "./NavbarAccordion";
import ashlyicon from "../components/assets/ashly_icon.png";
import NavbarbabyAccordion from "./NavbarbabyAccordion";

const NavbarLinksResponsive = () => {
  const [showhide, setshowhide] = useState(false);
  // menubar show hide
  const contentClassname = showhide
    ? navbarlinkresponsive.menubar
    : navbarlinkresponsive.hide;

  // baby click
  // const [babyshow, setBabyshow] = useState(false);

  // const togglebaby = babyshow
  //   ? navbarlinkresponsive.baby_click
  //   : navbarlinkresponsive.baby;

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
                {/* <div className={navbarlinkresponsive.name}>
                  <div className={navbarlinkresponsive.logo}>
                    <div>
                      <Image
                        src={ashlyicon}
                        alt="ashlyicon"
                        width={25}
                        height={10}
                      />
                      <h4>Ashley</h4>
                    </div>
                    <h3>Shop Store</h3>
                  </div>
                </div> */}

                <div
                //  menulisthide={menulisthide}
                //   setMenulisthide={setMenulisthide}
                >
                  <NavbarAccordion />
                </div>
              </div>

              {/* parent four */}
{/* 
              <div className={navbarlinkresponsive.baby}>
                <div
                  className={navbarlinkresponsive.name}>
                  <div>
                    <Image
                      src={ashlyicon}
                      alt="ashlyicon"
                      width={25}
                      height={10}
                    />
                    <h3>baby&Kids</h3>
                  </div>
                </div>
                <div>
                  <NavbarbabyAccordion />
                </div>
                <div className={navbarlinkresponsive.services}>
                  <p>Prequalify for Financing</p>
                  <p className={navbarlinkresponsive.para}>design services</p>
                  <p>
                    <a className={navbarlinkresponsive.img}>
                      <Image src={flag} alt="logo" width={15} />
                    </a>
                    United States
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* hamberger end  */}
    </div>
  );
};

export default NavbarLinksResponsive;
