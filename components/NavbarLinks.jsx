import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategory } from "../app/features/categorySlice";
import axios from "axios";

import Link from "next/link";

import navbar from "../styles/NavbarLinks.module.scss";

const NavbarLinks = () => {
  const categories = useSelector(selectCategory);
  const [discountCategories, setDiscountCategories] = useState([]);

  useEffect(() => {
    async function getDisCats() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/products/discount/categories"
        );
        setDiscountCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    }
    getDisCats();
  }, []);

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });

  return (
    <div className={navbar.navbar_links_items_wrapper}>
      {mainCategories?.map((mainCategory) => (
        <div className={navbar.links_wrapper} key={mainCategory._id}>
          <p className={navbar.links}>{mainCategory.title}</p>
          <div className={navbar.dropdown}>
            {categories?.categories
              .filter(
                (filteredCats) => filteredCats.parent_id === mainCategory._id
              )
              .map((subCats) => (
                <Link href={`/productsNew/${subCats.slug}`} key={subCats._id}>
                  <p className={navbar.dropdown_link}>{subCats.title}</p>
                </Link>
              ))}
          </div>
        </div>
      ))}
      <div className={navbar.links_wrapper}>
        <p className={navbar.links} style={{ color: "red", fontWeight: "600" }}>
          Discount
        </p>
        <div className={navbar.dropdown}>
          {discountCategories?.map((item) => (
            <Link href={`/discountedproducts/${item.slug}`} className={navbar.dropdown_link} key={item._id}>
              <p className={navbar.dropdown_link}> {item.title} </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
