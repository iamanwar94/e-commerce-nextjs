import React from "react";
import sofa from "./assets/sofa.webp";
import model from "./assets/model.jpg";
import table from "./assets/table.jpg";
import "./Furniture.scss";

const Furniture = () => {
  const Card = () => {
    return (
      <div className="three_card_item">
        <img src={sofa} alt="sofa" />
        <h3>Sofas</h3>
        <p>Price at $399.99</p>
        <button>Shop Now</button>
      </div>
    );
  };

  const Card1 = () => {
    return (
      <div className="one_card">
        <div className="one_card_image">
          <img src={model} alt="model" />
        </div>
        <div className="one_card_info">
          <h5>spring essentials</h5>
          <h3>the spring catalog is here</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            expedita.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    );
  };
  const Card1Reverse = () => {
    return (
      <div className="one_card_reverse">
        <div className="one_card_info">
          <h5>curate comfort</h5>
          <h3>refined relaxation</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
            expedita.
          </p>
          <button>Shop All Living Room</button>
        </div>
        <div className="one_card_image">
          <img src={model} alt="model" />
        </div>
      </div>
    );
  };
  const FourCard = () => {
    return (
      <div className="four_cards_item">
        <img src={sofa} alt="sofa" />
        <h3>Sofas</h3>
        <button>Shop Now</button>
      </div>
    );
  };

  return (
    <div className="furniture_wrapper">
      <div className="fur_tree"></div>
      <div className="furn_heading">
        <h1>Furniture</h1>
      </div>
      <div className="three_cards_wrapper">
        <div className="three_cards_heading">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
        <div className="three_cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="one_card_wrapper">
        <Card1 />
      </div>
      <div className="one_reverse_card_wrapper">
        <Card1Reverse />
      </div>
      <div className="four_cards_wrapper">
        <FourCard />
        <FourCard />
        <FourCard />
        <FourCard />
      </div>
      <div className="big_card_wrapper">
        <div className="big_card_img">
          <img src={table} alt="table" />
        </div>
        <div className="big_cards_items_wrapper">
          <div className="big_card_items">
            <FourCard />
            <FourCard />
            <FourCard />
            <FourCard />
          </div>
        </div>
      </div>
      <div className="one_reverse_card_wrapper">
        <Card1Reverse />
      </div>
      <div className="four_cards_wrapper">
        <FourCard />
        <FourCard />
        <FourCard />
        <FourCard />
      </div>
      <div className="big_card_wrapper">
        <div className="big_card_img">
          <img src={table} alt="table" />
        </div>
        <div className="big_cards_items_wrapper">
          <div className="big_card_items">
            <FourCard />
            <FourCard />
            <FourCard />
            <FourCard />
          </div>
        </div>
      </div>
      <div className="four_cards_wrapper">
        <FourCard />
        <FourCard />
        <FourCard />
        <FourCard />
      </div>
    </div>
  );
};

export default Furniture;
