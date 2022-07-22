import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { TbCircle1 } from "react-icons/tb";

import bed from "../../assets/fur12.jpg";
import product from "../../../styles/ProductDetail.module.scss";
import dimension from "../..//assets/dimensions.webp";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart } from "react-icons/ai";
const ProductDetail = () => {
  return (
    <div className={product.product_detail_wrapper}>
      <div className={product.img_and_detail}>
        <div className={product.carousel}>
          <Image src={bed} alt="bed" />
        </div>
        <div className={product.product_detail}>
          <div className={product.name_price}>
            <h4>Brand Name</h4>
            <h2>Product Name</h2>
            <p>Item Code: ED1201301-1013</p>
            <div className={product.flex + " " + product.reviews}>
              <span className={product.flex}>
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
                <AiFillStar className={product.icon} />
              </span>
              <p>98 Reviews</p>
            </div>
            <div className={product.flex + " " + product.price}>
              <h3>Rs. 599.99</h3>
              <span className={product.mx - 2}>
                <RiToolsFill className={product.setting_icon} />
              </span>
              <h3>Assembly Required</h3>
            </div>
          </div>
          <div className={product.color_size}>
            <div className={product.color + " " + product.flex}>
              <TbCircle1 className={product.icon} />
              <h4>Color:</h4>
              <p>Pink, Yellow, Red</p>
            </div>
            <div className={product.size + " " + product.flex}>
              <TbCircle1 className={product.icon} />
              <h4>Size:</h4>
              <p>King, Queen, Medium, Small</p>
            </div>
          </div>
        </div>
      </div>
      <div className={product.product_features_and_subtotal}>
        <div className={product.features}>
          <div className={product.feature_heading}>
            <h4>Details and Overview</h4>
            <h4>Products Reviews</h4>
            <h4>Customer Care</h4>
          </div>
          <div className={product.overview}>
            <div className={product.description}>
              <h3>Details and Overview</h3>
              <h4>Description</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Accusantium, corrupti. Saepe animi maiores modi quas perferendis
                asperiores assumenda voluptatibus nobis ipsa non minus tempore
                provident nisi adipisci eaque, reprehenderit ratione.
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Rerum, molestiae! Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Non, dolorem?
                </li>
              </ul>
              <h4>Weight</h4>
              <p>189.81 lbs. (86.1 kgs.)</p>
            </div>
            <div className={product.dimenstion}>
              <h4>Dimensions</h4>
              <img src={dimension} alt="" />
              <ul>
                <li>Width: 150</li>
                <li>Height: 150</li>
                <li>Depth: 140</li>
              </ul>
              <h4>Additional Dimensions</h4>
              <ul>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
                <li>Queen upholstered footboard Width: 64.00"</li>
              </ul>
              <h4>Assembly Instructions</h4>
              <p>Please Download this Guide</p>
            </div>
          </div>

          <div className={product.reviews}></div>
          <div className={product.customer_care}></div>
        </div>
        <div className={product.subtotal}>
          <h3>Subtotal: Rs. 1799.99</h3>
          <div className={product.qty_wrapper}>
            <h3>Qty:</h3>
            <div className={product.qty}>
              <AiOutlineMinus className={product.icon} />
              <span>1</span>
              <AiOutlinePlus className={product.icon} />
            </div>
            <button>Add Items to Cart</button>
            <div className={product.icon}>
              <AiOutlineHeart className={product.heart} />
            </div>
          </div>
          <div className={product.delivery}>
            <h6>Delivery Options</h6>
            <p>Free Ground Shipping</p>
            <p>Usually ships in 1 to 2 weeks</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
