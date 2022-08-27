import React, { useState } from "react";
import navbarlinkresponsive from "../styles/NavbarLinksResponsive.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import NavbarAccordion from "./NavbarAccordion";
import { useRouter } from "next/router";
import Link from "next/link";

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

  const router = useRouter();

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
                {/* <button onClick={() => router.push("/login")}>Log In</button >
                  <button onClick={() => router.push("/deliverytracking")}>Delevery Tracking</button > */}
                <Link href="/login">
                  <button onClick={() => setshowhide(!showhide)}>Log In</button >
                </Link>
                <Link href="/deliverytracking">
                  <button onClick={() => setshowhide(!showhide)}>Delevery Tracking</button >
                </Link>
              </div>

              {/* parent two */}

              <div className={navbarlinkresponsive.zip}>
                <p>
                  <Link href="/location">
                    <a onClick={() => setshowhide(!showhide)}><GoLocation /></a>
                  </Link>
                  Your Closet Ashley
                  <Link href="/location">
                    <span onClick={() => setshowhide(!showhide)}>Please Enter Zip Code</span>
                  </Link>
                </p>
              </div>

              {/* parent three */}

              <div className={navbarlinkresponsive.links}>

                <div>
                  <NavbarAccordion  showhide={showhide} setshowhide={setshowhide}/>
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
