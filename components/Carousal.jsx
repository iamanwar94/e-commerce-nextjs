import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import carousal from "../styles/Carousal.module.scss";

const Carousal = ({ height, slider, url }) => {
  return (
    <div className={carousal.carousal_wrapper}>
      <div className={carousal.carousal} style={{ position: "relative" }}>
        <Carousel
          interval={4000}
          animation="slide"
          duration={1200}
          navButtonsAlwaysVisible={true}
          height={height}
        >
          {slider?.map((sliderImage, i) => (
            <Image
              src={`${url}${sliderImage.image}`}
              key={sliderImage._id}
              alt={sliderImage.title}
              layout="fill"
              objectFit="fill"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousal;
