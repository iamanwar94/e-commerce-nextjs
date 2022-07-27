import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../App/Features/categorySlice";

import Link from "next/link";

import navbar from "../styles/NavbarLinks.module.scss";

const NavbarLinks = () => {
  const categories = useSelector(selectCategory);

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });

  return (
    <div className={navbar.navbar_links_items_wrapper}>
      <div className={navbar.links_wrapper}>
        <Link className={navbar.links} href="/">
          <a>Home</a>
        </Link>
        <div className={navbar.dropdown}>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
        </div>
      </div>

      {mainCategories?.map((mainCategory) => (
        <div className={navbar.links_wrapper} key={mainCategory._id}>
          <Link className={navbar.links} href="/furniture">
            <a>{mainCategory.title} </a>
          </Link>
          <div className={navbar.dropdown}>
            {categories?.categories
              .filter(
                (filteredCats) => filteredCats.parent_id === mainCategory._id
              )
              .map((subCats) => (
                <Link href="/" className={navbar.dropdown_link}>
                  <a>{subCats.title}</a>
                </Link>
              ))}
            {/* <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link>
            <Link href="/" className={navbar.dropdown_link}>
              <a>Add Category Here</a>
            </Link> */}
          </div>
        </div>
      ))}

      <div className={navbar.links_wrapper}>
        <Link className={navbar.links} href="/sales">
          <a>Sales</a>
        </Link>
        <div className={navbar.dropdown}>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
        </div>
      </div>
      <div className={navbar.links_wrapper}>
        <Link className={navbar.links} href="/freedelivery">
          <a>Free Delivery Items</a>
        </Link>
        <div className={navbar.dropdown}>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
          <Link href="/" className={navbar.dropdown_link}>
            <a>Add Category Here</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
