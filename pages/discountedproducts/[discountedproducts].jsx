import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  selectCategory,
} from "../../app/features/categorySlice";

import { fetchProducts, selectProducts } from "../../app/features/productSlice";

import FilterAccordion from "../../components/FilterAccordion";
import ProductCard from "../../components/ProductCard";

import product from "../../styles/Products.module.scss";

const DiscountedProducts = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const products = useSelector(selectProducts);
  const category = useSelector(selectCategory);

  const filteredProducts = products?.products.filter((fp) => {
    return fp.category_id.slug === router.query.discountedproducts;
  });

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <div className={product.products_wrapper}>
      <div className={product.filter_products_wrapper}>
        <div className={product.filters_wrapper}>
          <div className={product.filter_heading}>
            <h3></h3>
            <p>N of Ns Products Showing</p>
          </div>

          <div className={product.filter_cats}>
            <FilterAccordion />
          </div>
        </div>
        {/* filters ends here  */}
        <div className={product.products_item_wrapper}>
          {/* cats ends here  */}
          <div className={product.products_cards_wrapper}>
            {filteredProducts?.map((product) => (
              <ProductCard key={product._id} products={product} />
            ))}
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default DiscountedProducts;
