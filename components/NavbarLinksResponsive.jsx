import React, { useState } from "react";
import navbarlinkresponsive from "../styles/NavbarLinksResponsive.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { RiArrowRightSLine } from "react-icons/ri";
import NavbarAccordion from "./NavbarAccordion";
import { useRouter } from "next/router";
import Link from "next/link";

// import * as React from 'react';
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";

const NavbarLinksResponsive = () => {
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   bgcolor: 'background.paper',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };

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
          <div className={contentClassname}>
            <div className={hidemenubar}>
              {/* parent one */}
              <div className={navbarlinkresponsive.button}>
                {/* <button onClick={() => router.push("/login")}>Log In</button >
                  <button onClick={() => router.push("/deliverytracking")}>Delevery Tracking</button > */}
                <Link href="/login">
                  <button onClick={() => setshowhide(!showhide)}>Log In</button>
                </Link>
                <Link href="/deliverytracking">
                  <button onClick={() => setshowhide(!showhide)}>
                    Delevery Tracking
                  </button>
                </Link>
              </div>

              {/* parent two */}

              <div className={navbarlinkresponsive.zip}>
                <p>
                  <Link href="/location">
                    <a onClick={() => setshowhide(!showhide)}>
                      <GoLocation />
                    </a>
                  </Link>
                  Your Closet Ashley
                  {/* <Link href="/location"> */}
                  {/* <span onClick={() => setshowhide(!showhide)}> */}
                  {/* <span onClick={handleOpen}> */}
                  <span>
                    Please Enter Zip Code
                  </span>
                  {/* </Link> */}
                </p>
              </div>

              {/* Modal */}
              <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal> */}
              </div>

              {/* parent three */}

              <div className={navbarlinkresponsive.links}>
                <div>
                  <NavbarAccordion
                    showhide={showhide}
                    setshowhide={setshowhide}
                  />
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
