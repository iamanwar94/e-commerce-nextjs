import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  selectCategory,
} from "../../app/features/categorySlice";

import { fetchProducts, selectProducts } from "../../app/features/productSlice";
import { selectSearchProducts } from "../../app/features/searchSlice";

import FilterAccordion from "../../components/FilterAccordion";
import ProductCard from "../../components/ProductCard";

import product from "../../styles/Products.module.scss";

const SearchedProducts = () => {
  //   const [proBySearch, setproBySearch] = useState([]);

  const productsBySearch = useSelector(selectSearchProducts);

  //   const router = useRouter();
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const category = useSelector(selectCategory);

  //   const filteredProducts = products?.products.filter((fp) => {
  //     return fp.category_id.slug === router.query.productslug;
  //   });

  //   const currentCategory = category?.categories.filter((currentCat) => {
  //     return currentCat.slug === router.query.productslug;
  //   });

  //   const curCat = currentCategory ? currentCategory[0] : "";

  //   const parentCategory = category?.categories.filter((parentCat) => {
  //     return parentCat._id === curCat.parent_id;
  //   });

  //   const parentCat = parentCategory ? parentCategory[0] : "";

  //   const siblingCategory = category?.categories.filter((siblingsCats) => {
  //     return siblingsCats.parent_id === parentCat._id;
  //   });

  //   const catClickHandler = (slug) => {
  //     // console.log(slug);

  //     const pros = products?.products.filter((fp) => {
  //       return fp.category_id.slug === slug;
  //     });

  //     setproByCat(pros);
  //     // console.log(proByCat);
  //   };

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
            <h3>
              {/* {filteredProducts[0] && filteredProducts[0].category_id.title} */}
            </h3>
            <p>N of Ns Products Showing</p>
          </div>
          {/* <div className={product.filters_cat}>
            <h3>{parentCat.title} </h3>

            {siblingCategory?.map((siblingCats) => (
              <p
                key={siblingCats._id}
                onClick={() => catClickHandler(siblingCats.slug)}
              >
                {siblingCats.title}
              </p>
            ))}
          </div> */}
          <div className={product.filter_cats}>
            <FilterAccordion />
          </div>
        </div>
        {/* filters ends here  */}
        <div className={product.products_item_wrapper}>
          {/* cats ends here  */}
          <div className={product.products_cards_wrapper}>
            {/* {!filteredProducts ? ( */}
            {/* <h5 style={{ margin: "80px auto" }}>No Products Found</h5> */}
            {/* ) : ( */}
            {/* (proByCat.length >= 1 ? proByCat : filteredProducts) */}
            {productsBySearch?.map((product) => (
              <ProductCard key={product._id} products={product} />
            ))}
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default SearchedProducts;
