// from installed libraries

import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsChatDots } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Slider from "react-slick";

// from redux slices

import { fetchProducts, selectProducts } from "../app/features/productSlice";
import { fetchCategory, selectCategory } from "../app/features/categorySlice";

//from assets and styles

import styles from "../styles/Home.module.scss";
import model from "./assets/model.jpg";
import loader from "../components/assets/loader.gif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//from components

import Carousal from "../components/Carousal";
import CategoriesCard from "../components/CategoriesCard";
import DiscountCard from "../components/DiscountCard";
import BannerCard from "../components/BannerCard";
import CategoryCard from "../components/CategoryCard";
import ThinBannerCard from "../components/ThinBannerCard";
import ShopByCategories from "../components/ShopByCategories";
import ChatBot from "../components/ChatBot";

export default function Home({ categoriesData }) {
  const [slider, setSlider] = useState([]);
  const [botShow, setBotShow] = useState(false);
  const [discountProducts, setDiscountProducts] = useState([]);
  const [featProducts, setFeatProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const dispatch = useDispatch();

  const imgURL = "https://ashley-api.herokuapp.com/uploads/";

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // new_work_width
  const [size, setSize] = useState({});

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  // console.log(size.x);
  if (size.x < 1024) {
    settings.slidesToShow = 3;
  }
  if (size.x < 769) {
    settings.slidesToShow = 2;
  }
  // new_work_width


  const categories = useSelector(selectCategory);
  const products = useSelector(selectProducts);

  const filteredProducts = products?.products.filter((fp) => {
    return fp.category_id.slug === "sheet-sets";
  });

  const mainCategories = categories?.categories.filter((cat) => {
    return cat.parent_id === "";
  });

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    async function getDisProducts() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/products/discounted"
        );
        setDiscountProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    getDisProducts();
  }, []);
  useEffect(() => {
    async function getFeatProducts() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/products/featured"
        );
        setFeatProducts(response.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    getFeatProducts();
  }, []);
  useEffect(() => {
    async function getBanner() {
      try {
        const response = await axios.get(
          "https://ashley-api.herokuapp.com/banners"
        );
        setBanner(response.data.banners);
      } catch (error) {
        console.error(error);
      }
    }
    getBanner();
  }, []);

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
        <div className={styles.home_wrapper} style={{}}>
          <Carousal
            height={460}
            slider={slider}
            url="https://ashley-api.herokuapp.com/uploads/slider/"
          />
          <ShopByCategories categoriesData={categoriesData} />
          <div className={styles.discount_cards_wrapper}>
            <div className={styles.discount_cards_heading}>
              <h2>Discount in full bloom</h2>
            </div>

            <div className={styles.discount_cards}>
              {discountProducts?.slice(0, 3).map((disproduct) => (
                <DiscountCard products={disproduct} key={disproduct._id} />
              ))}
            </div>
            <div className={styles.discount_cards}>
              {discountProducts?.slice(3, 6).map((disproduct) => (
                <DiscountCard products={disproduct} key={disproduct._id} />
              ))}
            </div>
          </div>
          <div className={styles.banner_card_wrapper}>
            {banner?.map((item) => (
              <BannerCard key={item._id} banner={item} />
            ))}
          </div>
          <div className={styles.free_shipping}>
            <h4>Swith it up</h4>
            <h2>Update your happy Place</h2>
            {/* <div className={styles.category_cards}> */}
            <Slider {...settings}>
              {featProducts?.map((item) => (
                <CategoryCard products={item} key={item._id} />
              ))}
            </Slider>
            {/* </div> */}
          </div>
          <div className={styles.thin_banner_wrapper}>
            <ThinBannerCard data={categoriesData} />
          </div>
          <div className={styles.free_shipping}>
            <h4>Swith it up</h4>
            <h2>Update your happy Place</h2>
            <Slider {...settings}>
              {filteredProducts?.map((item) => (
                <CategoryCard products={item} key={item._id} />
              ))}
            </Slider>
            {/* </div> */}
          </div>

          {/* <div className={styles.thin_banner_wrapper}>
            <ThinBannerCard title="outdoor" feature="reintroducing" />
          </div> */}
          <div className={styles.chatbot_wrapper}>
            <div className={styles.chatbot}>{botShow && <ChatBot />}</div>
            <div
              className={styles.chatbot_icon}
              onClick={() => setBotShow(!botShow)}
            >
              {botShow ? <AiOutlineDown /> : <BsChatDots />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  // const { productdetailslug } = context.query;

  const categoriesRes = await fetch(
    `https://ashley-api.herokuapp.com/categories/fetch/categories`
  );
  const catData = await categoriesRes.json();
  const categoriesData = catData.categories;
  return {
    props: { categoriesData },
    // will be passed to the page component as props
  };
}
