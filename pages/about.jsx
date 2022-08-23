import React, { useEffect } from "react";
import about from "../styles/About.module.scss";
import banner from "./assets/henry-ascroft-4RJYV_rkoeM-unsplash (1).jpg";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

// from redux slices

import { fetchProducts } from "../app/features/productSlice";
import { fetchCategory, selectCategory } from "../app/features/categorySlice";

const About = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);

  const Card = () => {
    return (
      <div className={about.card}>
        <Image className={about.img} src={banner} alt="card" />
        <h1 className={about.logo}>BRAND LOGO</h1>
        <h1>why ashley</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum minima
          error voluptatibus aut modi sequi nisi accusantium ratione blanditiis
          quo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          minima error voluptatibus aut modi sequi nisi accusantium ratione
        </p>
      </div>
    );
  };

  return (
    <div className={about.about_wrapper}>
      <div className={about.about_heading}>
        <h1>About us</h1>
      </div>
      <div
        className={about.about_banner}
        style={
          {
            // backgroundImage: `url('${banner}')`,
          }
        }
      >
        <div className={about.about_banner_content}>
          <h4>Who We Are</h4>
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            quam laborum nisi non quis debitis!
          </p>
        </div>
      </div>
      <div className={about.purpose}>
        <h3>our purpose</h3>
        <h1>
          to inspire the love of home and enrich the lives of those around us
        </h1>
      </div>
      <div className={about.history}>
        <div className={about.img}>
          <Image className={about.img} src={banner} alt="banner" />
        </div>
        <div className={about.info}>
          <h3>The legacy</h3>
          <h2>our history</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            fuga sunt rerum facilis nihil quaerat tempore officiis, ad atque
            voluptate iure, ad tempora illum quod sapiente modi repudiandae
            placeat quas id. Nostrum quibusdam nulla eligendi! Saepe ad minus
            placeat quas id. Nostrum quibusdam nulla eligendi! Saepe ad minus
            placeat quas id. Nostrum quibusdam nulla eligendi! Saepe ad minus
            natus accusantium, ducimus porro explicabo
          </p>
        </div>
      </div>
      <div className={about.why}>
        <Card />
        <Card />
      </div>

      <div className={about.help}>
        <h3>here to help</h3>
        <h2>how we are making difference</h2>
        <div className={about.card_wrapper}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default About;
