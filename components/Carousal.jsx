import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import carousal from "../styles/Carousal.module.scss";

const Carousal = ({ height, slider, url }) => {
  return (
    <div className={carousal.carousal_wrapper}>
      <div className={carousal.carousal}>
        <Carousel
          interval={4000}
          animation="slide"
          duration={1200}
          navButtonsAlwaysVisible={true}
          height={height}
        >
          {slider?.map((sliderImage, i) => (
            <Image
              src={
                sliderImage.image
                  ? `${url}${sliderImage.image}`
                  : `${url}${sliderImage}`
              }
              key={sliderImage._id ? sliderImage._id : i}
              alt={sliderImage.title ? sliderImage.title : i}
              layout="fill"
              objectFit="contain"
            />
            // <img
            //   src={`${url}${sliderImage ? sliderImage : sliderImage.image}`}
            //   key={sliderImage._id ? sliderImage._id : i}
            //   alt={sliderImage.title ? sliderImage.title : i}
            // />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousal;
