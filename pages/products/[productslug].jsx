import React, { useEffect } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  selectCategory,
} from "../../App/Features/categorySlice";

import { fetchProducts, selectProducts } from "../../App/Features/productSlice";

import FilterAccordion from "../../components/FilterAccordion";
import ProductCard from "../../components/ProductCard";

import product from "../../styles/Products.module.scss";
import CategoriesCard from "../../components/CategoriesCard";
import catchair from "../../components/assets/chair3.png";
import { RouterTwoTone } from "@mui/icons-material";

const Products = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const category = useSelector(selectCategory);

  const filteredProducts = products?.products.filter((fp) => {
    return fp.category_id.slug === router.query.productslug;
  });

  const currentCategory = category?.categories.filter((currentCat) => {
    return currentCat.slug === router.query.productslug;
  });

  const curCat = currentCategory ? currentCategory[0] : "";

  const parentCategory = category?.categories.filter((parentCat) => {
    return parentCat._id === curCat.parent_id;
  });

  const parentCat = parentCategory ? parentCategory[0] : "";

  const siblingCategory = category?.categories.filter((siblingsCats) => {
    return siblingsCats.parent_id === parentCat._id;
  });

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={product.products_wrapper}>
      <div className={product.filter_products_wrapper}>
        <div className={product.filters_wrapper}>
          <div className={product.filter_heading}>
            <h3>
              {filteredProducts ? filteredProducts[0].category_id.title : ""}
            </h3>
            <p>N of Ns Products Showing</p>
          </div>
          <div className={product.filters_cat}>
            <h3>{parentCat.title} </h3>

            {siblingCategory?.map((siblingCats) => (
              <p key={siblingCats._id}>{siblingCats.title} </p>
            ))}
          </div>
          <div className={product.filter_cats}>
            <FilterAccordion />
          </div>
        </div>
        {/* filters ends here  */}
        <div className={product.products_item_wrapper}>
          {/* <div className={product.categories_wrapper}>
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
            <CategoriesCard img={catchair} title="" />
          </div> */}
          {/* cats ends here  */}
          <div className={product.products_cards_wrapper}>
            {filteredProducts ? (
              <h5 style={{ margin: "80px auto" }}>No Products Found</h5>
            ) : (
              filteredProducts?.map((product) => (
                <ProductCard key={product._id} products={product} />
              ))
            )}
          </div>
          {/* products cards ends here  */}
        </div>
      </div>
    </div>
  );
};

export default Products;
