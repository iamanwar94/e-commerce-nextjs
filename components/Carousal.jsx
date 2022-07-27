import React, { useEffect, useState } from "react";
import axios from "axios";
// import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import carousal from "../styles/Carousal.module.scss";

const Carousal = ({ height, slider, url }) => {
  // const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   async function getSLider() {
  //     try {
  //       const response = await axios.get('https://ashley-api.herokuapp.com/sliders');
  //       console.log(response);
  //       setSlider(response.data.sliders)
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getSLider();
  // }, []);

  // var items = [
  //   {
  //     name: "Random Name #1",
  //     description: "Probably the most random thing you have ever seen!",
  //     img: "https://mdbcdn.b-cdn.net/img/new/slides/042.webp",
  //   },
  //   {
  //     name: "Random Name #2",
  //     description: "Hello World!",
  //     img: "https://mdbcdn.b-cdn.net/img/new/slides/041.webp",
  //   },
  //   {
  //     name: "Random Name #2",
  //     description: "Hello World!",
  //     img: "https://mdbcdn.b-cdn.net/img/new/slides/043.webp",
  //   },
  // ];
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
          {slider?.map((sliderImage,i) => (
            <img
              src={`${url}${sliderImage ? sliderImage : sliderImage.image}`}
              key={sliderImage._id?sliderImage._id:i}
              alt={sliderImage.title?sliderImage.title:i}
            />
          ))}
        </Carousel>
        {/* <div
          id="carouselExampleIndicators"
          className="carousel slide relative mt-2 mb-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                className="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
              />
            </div>
            <div className="carousel-item float-left w-full">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                className="block w-full"
                alt="Exotic Fruits"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}
      </div>
    </div>

    // <div
    //   id="carouselExampleIndicators"
    //   class="carousel slide relative"
    //   data-bs-ride="carousel"
    // >
    //   <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="0"
    //       class="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div class="carousel-inner relative w-full overflow-hidden">
    //     <div class="carousel-item active float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
    //         class="block w-full"
    //         alt="Wild Landscape"
    //       />
    //     </div>
    //     <div class="carousel-item float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
    //         class="block w-full"
    //         alt="Camera"
    //       />
    //     </div>
    //     <div class="carousel-item float-left w-full">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
    //         class="block w-full"
    //         alt="Exotic Fruits"
    //       />
    //     </div>
    //   </div>
    //   <button
    //     class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="prev"
    //   >
    //     <span
    //       class="carousel-control-prev-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="next"
    //   >
    //     <span
    //       class="carousel-control-next-icon inline-block bg-no-repeat"
    //       aria-hidden="true"
    //     ></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
  );
};

export default Carousal;
