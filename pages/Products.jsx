import React from "react";
import Image from 'next/image'

import FilterAccordion from "../components/FilterAccordion";
import ProductCard from "../components/ProductCard";

import image from "./assets/image.jpg";
import product from "../styles/Products.module.scss";

const Products = () => {
  return (
    <div className={product.products_wrapper}>
      <div className={product.filter_products_wrapper}>
        <div className={product.filters_wrapper}>
          <div className={product.filter_heading}>
            <h3>Category Heading</h3>
            <p>N of Ns Products Showing</p>
          </div>
          <div className={product.filters_cat}>
            <h3>Category </h3>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
           
          </div>
          <div className={product.filter_cats}>
            <FilterAccordion />
          </div>
        </div>
        {/* filters ends here  */}
        <div className={product.products_item_wrapper}>
          <div className={product.categories_wrapper}>
            <Image src={image} alt="cat-img" />
          </div>
          {/* cats ends here  */}
          <div className={product.products_cards_wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <br />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
