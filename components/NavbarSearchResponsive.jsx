import React, { useState, useEffect } from "react";
import responsivenavsearch from "../styles/NavbarsearchResponsive.module.scss";
import Link from "next/link";
import Image from "next/image";
import newashlylogo from "./assets/newashlylogo.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import NavbarLinksResponsive from "./NavbarLinksResponsive";
import { BiSearchAlt2 } from "react-icons/bi";

// for search start
import { useSelector, useDispatch } from "react-redux";
import { selectCart } from "../app/features/cartSlice";
// for search end


import { useRouter } from "next/router";
import { selectProducts } from "../app/features/productSlice";
import { setSearchProducts } from "../app/features/searchSlice";

const NavbarSearchResponsive = () => {
  const selectCartDetail = useSelector(selectCart);
  const cartCount = selectCartDetail.length;

  // const [serchbar, setSearchbar] = useState(false);

  // const toggleClass = () => {
  //   setSearchbar(!serchbar);
  // };

  const [searchedProducts, setSearchedProducts] = useState([]);
  const selectProductDetail = useSelector(selectProducts);
  const products = selectProductDetail?.products;
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

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

  return (
    <div className={responsivenavsearch.responsive_navbar_search_wrapper}>
      <NavbarLinksResponsive />

      <div className={responsivenavsearch.logo}>
        <Link href="/">
          <a>
            <Image
              src={newashlylogo}
              alt="logo"
              className={responsivenavsearch.img}
              // priority="low"
              // rel="preload"
              // layout="fill"
              priority
            />
          </a>
        </Link>
      </div>

      <div className={responsivenavsearch.search_box}>
        <button className={responsivenavsearch.btn_search}>
          <BiSearchAlt2
          //  onClick={toggleClass}
          onClick={searchClickHandler}
            />
        </button>
        <input
          type="text"
          className={
            responsivenavsearch.input_search_two
            // serchbar
            //   ? responsivenavsearch.input_search_two
            //   : responsivenavsearch.input_search
          }
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className={responsivenavsearch.navbar_links_wrapper}>
        {/* cart */}
        <div className={responsivenavsearch.icon_wrapper}>
          <Link href="/cart">
            <a className={responsivenavsearch.cart_icon}>
              <AiOutlineShoppingCart className={responsivenavsearch.icon} />
              <span className={responsivenavsearch.badge}>{cartCount}</span>
            </a>
          </Link>
        </div>
        {/* whistlist */}
        <div className={responsivenavsearch.icon_wrapper}>
          <Link href="/wishlist">
            <a className={responsivenavsearch.cart_icon}>
              <AiOutlineHeart className={responsivenavsearch.hearticon} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearchResponsive;
