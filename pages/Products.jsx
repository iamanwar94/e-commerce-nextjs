import React from "react";
import image from "./assets/image.jpg";
import "./Products.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import FilterAccordion from "../../Components/FilterAccordion/FilterAccordion";

const Products = () => {
  return (
    <div className="products_wrapper">
      <div className="filter_products_wrapper">
        <div className="filters_wrapper">
          <div className="filter_heading">
            <h3>Beds</h3>
            <p>1 - 16 of 605 products</p>
          </div>
          <div className="filters_cat">
            <h3>Category title</h3>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
            <p>Category List</p>
          </div>
          <div className="filter_cats">
            <FilterAccordion />
          </div>
        </div>
        {/* filters ends here  */}
        <div className="products_item_wrapper">
          <div className="categories_wrapper">
            <img src={image} alt="cat-img" />
          </div>
          {/* cats ends here  */}
          <div className="products_cards_wrapper">
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
