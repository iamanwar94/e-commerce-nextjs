import React from "react";
import Image from "next/image";
import Link from "next/link";

import CategoryCard from "../components/CategoryCard";

import sofa from "./assets/fur12.jpg";
import model from "./assets/model.jpg";
import table from "./assets/table.jpg";
import furniture from "../styles/Furniture.module.scss";
import BannerCard from "../components/BannerCard";

const Furniture = () => {
  return (
    <div className={furniture.furniture_wrapper}>
      <div className={furniture.furniture_container}>
        {/*
         */}
        <div className={furniture.discount_cards}>
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
        </div>
        <div className={furniture.banner_card_wrapper}>
          <BannerCard
            img={model}
            cat="Category"
            title="Title"
            feature="This is the features of the product"
          />
        </div>

        <div className={furniture.category_cards}>
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
        </div>
        <div className={furniture.banner_card_wrapper}>
          <BannerCard
            img={model}
            cat="Category"
            title="Title"
            feature="This is the features of the product"
          />
        </div>
        <div className={furniture.category_cards}>
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
        </div>
        <div className={furniture.banner_card_wrapper}>
          <BannerCard
            img={model}
            cat="Category"
            title="Title"
            feature="This is the features of the product"
          />
        </div>
        <div className={furniture.category_cards}>
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
          <CategoryCard
            img={sofa}
            title="Something"
            feature="something under something"
          />
        </div>
      </div>
    </div>

    // const Card = () => {
    //     <div className={furniture.three_card_item}>
    //       <Image className={furniture.img} src={sofa} alt="sofa" />
    //       <h3>Sofas</h3>
    //       <p>Price at $399.99</p>
    //       <button>Shop Now</button>
    //     </div>
    //   );
    // };

    // const Card1 = () => {
    //   return (
    //     <div className={furniture.one_card}>
    //       <div className={furniture.one_card_image}>
    //         <Image className={furniture.img} src={model} alt="model" />
    //       </div>
    //       <div className={furniture.one_card_info}>
    //         <h5>spring essentials</h5>
    //         <h3>the spring catalog is here</h3>
    //         <p>
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
    //           expedita.
    //         </p>
    //         <button>Shop Now</button>
    //       </div>
    //     </div>
    //   );
    // };
    // const Card1Reverse = () => {
    //   return (
    //     <div className={furniture.one_card_reverse}>
    //       <div className={furniture.one_card_info}>
    //         <h5>curate comfort</h5>
    //         <h3>refined relaxation</h3>
    //         <p>
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
    //           expedita.
    //         </p>
    //         <button>Shop All Living Room</button>
    //       </div>
    //       <div className={furniture.one_card_image}>
    //         <Image className={furniture.img} src={model} alt="model" />
    //       </div>
    //     </div>
    //   );
    // };
    // const FourCard = () => {
    //   return (
    //     <div className={furniture.four_cards_item}>
    //       <Image className={furniture.img} src={sofa} alt="sofa" />
    //       <h3>Sofas</h3>
    //       <button>Shop Now</button>
    //     </div>
    //   );
    // };

    // return (
    //   <div className={furniture.furniture_wrapper}>
    //     <div className={furniture.fur_tree}></div>
    //     <div className={furniture.furn_heading}>
    //       <h1>Furniture</h1>
    //     </div>
    //     <div className={furniture.three_cards_wrapper}>
    //       <div className={furniture.three_cards_heading}>
    //         <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    //       </div>
    //       <div className={furniture.three_cards}>
    //         <Card />
    //         <Card />
    //         <Card />
    //       </div>
    //     </div>
    //     <div className={furniture.one_card_wrapper}>
    //       <Card1 />
    //     </div>
    //     <div className={furniture.one_reverse_card_wrapper}>
    //       <Card1Reverse />
    //     </div>
    //     <div className={furniture.four_cards_wrapper}>
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //     </div>
    //     <div className={furniture.big_card_wrapper}>
    //       <div className={furniture.big_card_img}>
    //         <Image className={furniture.img} src={table} alt="table" />
    //       </div>
    //       <div className={furniture.big_cards_items_wrapper}>
    //         <div className={furniture.big_card_items}>
    //           <FourCard />
    //           <FourCard />
    //           <FourCard />
    //           <FourCard />
    //         </div>
    //       </div>
    //     </div>
    //     <div className={furniture.one_reverse_card_wrapper}>
    //       <Card1Reverse />
    //     </div>
    //     <div className={furniture.four_cards_wrapper}>
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //     </div>
    //     <div className={furniture.big_card_wrapper}>
    //       <div className={furniture.big_card_img}>
    //         <Image className={furniture.img} src={table} alt="table" />
    //       </div>
    //       <div className={furniture.big_cards_items_wrapper}>
    //         <div className={furniture.big_card_items}>
    //           <FourCard />
    //           <FourCard />
    //           <FourCard />
    //           <FourCard />
    //         </div>
    //       </div>
    //     </div>
    //     <div className={furniture.four_cards_wrapper}>
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //       <FourCard />
    //     </div>
    //   </div>
  );
};

export default Furniture;
