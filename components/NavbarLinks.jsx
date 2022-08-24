import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../app/features/categorySlice";

import Link from "next/link";

import navbar from "../styles/NavbarLinks.module.scss";

const NavbarLinks = () => {
  const categories = useSelector(selectCategory);

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });

  return (
    <div className={navbar.navbar_links_items_wrapper}>
      {mainCategories?.map((mainCategory) => (
        <div className={navbar.links_wrapper} key={mainCategory._id}>
          <Link href={`/${mainCategory._id}`}>
            <p className={navbar.links}>{mainCategory.title}</p>
          </Link>
          <div className={navbar.dropdown}>
            {categories?.categories
              .filter(
                (filteredCats) => filteredCats.parent_id === mainCategory._id
              )
              .map((subCats) => (
                <Link href={`/products/${subCats.slug}`} key={subCats._id}>
                  <p className={navbar.dropdown_link}>{subCats.title}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;
