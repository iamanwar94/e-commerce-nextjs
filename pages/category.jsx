import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// from redux slices

import { fetchProducts } from "../app/features/productSlice";
import { fetchCategory } from "../app/features/categorySlice";

import CategoryCard from "../components/CategoryCard";

import sofa from "./assets/fur12.jpg";
import model from "./assets/model.jpg";
import furniture from "../styles/Furniture.module.scss";
import BannerCard from "../components/BannerCard";

const Furniture = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>This Page is now cancelled by owner</div>
    // <div className={furniture.furniture_wrapper}>
    //   <div className={furniture.furniture_container}>
    //     {/*
    //      */}
    //     <div className={furniture.discount_cards}>
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //     </div>
    //     <div className={furniture.banner_card_wrapper}>
    //       <BannerCard
    //         img={model}
    //         cat="Category"
    //         title="Title"
    //         feature="This is the features of the product"
    //       />
    //     </div>

    //     <div className={furniture.category_cards}>
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //     </div>
    //     <div className={furniture.banner_card_wrapper}>
    //       <BannerCard
    //         img={model}
    //         cat="Category"
    //         title="Title"
    //         feature="This is the features of the product"
    //       />
    //     </div>
    //     <div className={furniture.category_cards}>
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //     </div>
    //     <div className={furniture.banner_card_wrapper}>
    //       <BannerCard
    //         img={model}
    //         cat="Category"
    //         title="Title"
    //         feature="This is the features of the product"
    //       />
    //     </div>
    //     <div className={furniture.category_cards}>
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //       <CategoryCard
    //         img={sofa}
    //         title="Something"
    //         feature="something under something"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

// this page is now cancelled by the owner

export default Furniture;
