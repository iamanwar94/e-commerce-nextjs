import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../app/features/cartSlice";
import { setSearchProducts } from "../app/features/searchSlice";
import { selectProducts } from "../app/features/productSlice";
import { selectLoginData, setLogout } from "../app/features/loginSlice";

import navsearch from "../styles/NavbarSearch.module.scss";
import logo from "../components/assets/m_logo_360.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import HoverCart from "./HoverCart";

// from mui

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  outline: 0,
  py: 2,
  px: 4,
};

const NavbarSearch = () => {
  const selectCartDetail = useSelector(selectCart);
  const selectProductDetail = useSelector(selectProducts);
  const cartCount = selectCartDetail.length;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const products = selectProductDetail?.products;
  const loginData = useSelector(selectLoginData);

  useEffect(() => {
    const filteredData = products?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setSearchedProducts(filteredData);
  }, [products, searchTerm]);

  const searchClickHandler = () => {
    dispatch(setSearchProducts(searchedProducts));
    router.push("/search/searchedproducts");
  };

  const logoutHandler = () => {
    dispatch(setLogout());
    router.push("/");
  };

  return (
    <div className={navsearch.navbar_search_wrapper}>
      <div className={navsearch.logo}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              alt="logo"
              className={navsearch.img}
              layout="fill"
              objectFit="contain"
              priority
            />
          </a>
        </Link>
      </div>
      <div className={navsearch.zip}>
        <div>
          <div onClick={handleOpen}>
            <p>Your closest Ashley</p>
            <h5>Please Enter Zip Code</h5>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Change Location
              </Typography>
              <Box
                sx={{
                  margin: "10px 0",
                  display: "flex",
                }}
              >
                <TextField
                  fullWidth
                  label="Enter Zip Code Here"
                  id="fullWidth"
                />
                <Button
                  variant="outlined"
                  sx={{
                    margin: "0 10px",
                    width: 120,
                  }}
                >
                  Update
                </Button>
              </Box>
              <Typography id="modal-modal-description" sx={{ m: 2 }}>
                Closest Store to {"text here"} <br /> No Store Found <br />{" "}
                Please try another location.
              </Typography>
            </Box>
          </Modal>
        </div>
      </div>
      <div className={navsearch.navbar_search_input}>
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <div className={navsearch.icon} onClick={searchClickHandler}>
          <FiSearch />
        </div>
      </div>
      <div className={navsearch.navbar_links_wrapper}>
        {loginData ? (
          <>
            <div className={navsearch.links + " " + navsearch.links_account}>
              <Link href="/" className={navsearch.links}>
                <a>
                  <CgProfile
                    style={{ fontSize: 20, color: "grey", margin: "auto" }}
                  />
                  <br /> {loginData.first_name}
                </a>
              </Link>
              <div className={navsearch.account}>
                <Link href={"/orders"}>
                  <p style={{ cursor: "pointer" }}>Orders</p>
                </Link>
                <Link href={"/wishlist"}>
                  <p style={{ cursor: "pointer" }}>Wish List</p>
                </Link>
                <p style={{ cursor: "pointer" }} onClick={logoutHandler}>
                  Logout
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className={navsearch.links}>
            <Link href="/login" className={navsearch.links}>
              <a>
                Login <br /> Account
              </a>
            </Link>
          </p>
        )}
        <p className={navsearch.links}>
          <Link href="/deliverytracking" className={navsearch.links}>
            <a>
              Delivery <br /> Tracking
            </a>
          </Link>
        </p>
        <p className={navsearch.links}>
          <Link href="/" className={navsearch.links}>
            <a>Help</a>
          </Link>
        </p>
        <div className={navsearch.icon_wrapper}>
          <Link href="/cartnew">
            <a>
              <span className={navsearch.cart_icon}>
                <AiOutlineShoppingCart className={navsearch.icon} />
                <span className={navsearch.badge}>{cartCount}</span>
              </span>
            </a>
          </Link>
          <div className={navsearch.cart_detail}>
            <HoverCart />
          </div>
        </div>
        <div className={navsearch.icon_wrapper} style={{ padding: 0 }}>
          <Link href="/wishlist">
            <a>
              <span className={navsearch.cart_icon}>
                <AiOutlineHeart className={navsearch.icon} />
                {/* <span className={navsearch.badge}>{cartCount}</span> */}
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
