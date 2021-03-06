import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../App/Features/productSlice";
// import { fetchCategory } from "../App/Features/categorySlice";
import { selectProducts } from "../../App/Features/productSlice";
// import { selectCategory } from "../App/Features/categorySlice";

import FilterAccordion from "../../components/FilterAccordion";
import ProductCard from "../../components/ProductCard";

import product from "../../styles/Products.module.scss";
import CategoriesCard from "../../components/CategoriesCard";
import catchair from "../../components/assets/chair3.png";

const Products = () => {
  const router = useRouter();
  const { productslug } = router.query;
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  // const categories = useSelector(selectCategory);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(productslug);
  }, [dispatch]);

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
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
          </div>
          {/* cats ends here  */}
          <div className={product.products_cards_wrapper}>
            {products?.products.map((product) => (
              <ProductCard key={product._id} products={product} />
            ))}
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
