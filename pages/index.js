// from installed libraries

import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// from redux slices

import { fetchProducts } from "../App/Features/productSlice";
import { fetchCategory, selectCategory } from "../App/Features/categorySlice";

//from assets and styles

import styles from "../styles/Home.module.scss";
import model from "./assets/model.jpg";
import sofa from "./assets/fur12.jpg";
import loader from "../components/assets/loader.gif";

//from components

import Carousal from "../components/Carousal";
import CategoriesCard from "../components/CategoriesCard";
import DiscountCard from "../components/DiscountCard";
import cardimage from "../components/assets/fur12.jpg";
import BannerCard from "../components/BannerCard";
import CategoryCard from "../components/CategoryCard";
import ThinBannerCard from "../components/ThinBannerCard";

export default function Home() {
  const [slider, setSlider] = useState([]);
  const dispatch = useDispatch();

  const categories = useSelector(selectCategory);

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    async function getSLider() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/sliders"
        );
        setSlider(response.data.sliders);
      } catch (error) {
        console.error(error);
      }
    }
    getSLider();
  }, []);

  return (
    <div className="index_wrapper">
      <Head>
        <title>Furniture ECommerce App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!mainCategories ? (
        <h1
          style={{
            textAlign: "center",
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          {" "}
          <Image src={loader} alt="Loading..." height={100} width={100} />
        </h1>
      ) : (
        <div className={styles.home_wrapper}>
          <Carousal
            height={460}
            slider={slider}
            url="https://ashley-api.herokuapp.com/uploads/slider/"
          />
          <div className={styles.discount_cards_wrapper}>
            <div className={styles.discount_cards_heading}>
              <h2>Discount in full bloom</h2>
            </div>
            <div className={styles.discount_cards}>
              <DiscountCard img={cardimage} />
              <DiscountCard img={cardimage} />
              <DiscountCard img={cardimage} />
            </div>
            <div className={styles.discount_cards}>
              <DiscountCard img={cardimage} />
              <DiscountCard img={cardimage} />
              <DiscountCard img={cardimage} />
            </div>
          </div>
          <div className={styles.categories_wrapper}>
            <h3>Shop By Categories</h3>
            <div className={styles.categories}>
              {categories?.categories?.slice(0, 6).map((category) => (
                <CategoriesCard
                  key={category._id}
                  img={category.image}
                  title={category.title}
                  slug={category.slug}
                />
              ))}
            </div>
          </div>
          <div className={styles.banner_card_wrapper}>
            <BannerCard
              img={model}
              cat="Category"
              title="Title"
              feature="This is the features of the product"
            />
          </div>
          <div className={styles.category_cards}>
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
          <div className={styles.free_shipping}>
            <h4>Swith it up</h4>
            <h2>Update your happy Place</h2>
            <div className={styles.category_cards}>
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
          <div className={styles.thin_banner_wrapper}>
            <ThinBannerCard title="outdoor" feature="reintroducing" />
          </div>
          <div className={styles.free_shipping}>
            <h4>Swith it up</h4>
            <h2>Update your happy Place</h2>
            <div className={styles.category_cards}>
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

          <div className={styles.thin_banner_wrapper}>
            <ThinBannerCard title="outdoor" feature="reintroducing" />
          </div>
        </div>
      )}
    </div>
  );
}
