import React from "react";
import Image from "next/image";
import Location from "../styles/Location.module.scss";
import locationOne from "./assets/locationOne.jpg";
import locationTwo from "./assets/locationTwo.jpg";
import locationThree from "./assets/locationThree.jpg";
import locationFour from "./assets/locationFour.jpg";
import locationFive from "./assets/locationFive.png";
import locationSix from "./assets/locationSix.jpg";
import locationSeven from "./assets/locationSeven.jpg";
import locationEight from "./assets/locationEight.jpg";
import locationNine from "./assets/locationNine.jpg";
import locationTen from "./assets/locationTen.jpg";

const locationnew = () => {
  return (
    <div className={Location.location_wrapper}>
      <h1>Furniture Mecca Store Location</h1>

      {/* map wrapper  one*/}
      <div className={Location.map_wrapper}>
        {/* map one */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image src={locationOne} layout="fill" className={Location.image} />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              101 E. Venango St. Philadelphia ,PA 19134
            </span>
            <br />
            Phone No : <span className={Location.bold}>267-639-6801</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/MwRLeaENitBeuDHHA" target="_blank">
                Go To Direction
              </a>
            </button>
            {/* <button> Go To Direction</button> */}
          </div>
        </div>

        {/* map two */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image src={locationTwo} layout="fill" className={Location.image} />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              1430 W. Hunting Park Ave. Philadelphia ,PA 19140
            </span>
            <br />
            Phone No : <span className={Location.bold}>267-297-6801</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/pj7M47eawBYkWTAD8" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* map wrapper  two*/}
      <div className={Location.map_wrapper}>
        {/* map three */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationThree}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              5648 Lancaster Ave. Philadelphia, PA 19131
            </span>
            <br />
            Phone No : <span className={Location.bold}>215-877-1200</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/RgEYvXyomno4mC1e8" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>

        {/* map four */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationFour}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              7936 Frankford Ave. Philadelphia, PA 19136
            </span>
            <br />
            Phone No : <span className={Location.bold}>215-821-2855</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/LyMrBUoTM1NYwEwj6" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* map wrapper  three*/}
      <div className={Location.map_wrapper}>
        {/* map five */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationFive}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              501 S. 69th Street Upper Darby, PA 19082
            </span>
            <br />
            Phone No : <span className={Location.bold}>610-352-3500</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/H9n2kU9XKs7CZSN96" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>

        {/* map six */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image src={locationSix} layout="fill" className={Location.image} />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              130 E. Baltimore Ave. Lansdowne, PA 19050
            </span>
            <br />
            Phone No : <span className={Location.bold}>484-462-0282</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/YF5NMxvKBqB7wZiz6" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* map wrapper  four*/}
      <div className={Location.map_wrapper}>
        {/* map seven */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationSeven}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              1830 Delmar Drive Folcroft, PA 19032
            </span>
            <br />
            Phone No : <span className={Location.bold}>251-422-3883</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/SQcofdoRtoWnh5ms8" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>

        {/* map eight */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationEight}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              611 W. Brookdale St. Allentown, PA 18103
            </span>
            <br />
            Phone No : <span className={Location.bold}>484-460-7056</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/WHKV3BSgdwocGUdEA" target="_blank">
                Go To Direction
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* map wrapper  five*/}
      <div className={Location.map_wrapper}>
        {/* map nine */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image
              src={locationNine}
              layout="fill"
              className={Location.image}
            />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              408 Penn Street Reading, PA 19602
            </span>
            <br />
            Phone No : <span className={Location.bold}>484-869-5338</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/BNTHbhUHoFaXMsUq6" target="_blank">
                Go To Direction
              </a>
            </button>
            <br />
          </div>
        </div>

        {/* map ten */}
        <div className={Location.map_location_wrapper}>
          <div className={Location.map_image}>
            <Image src={locationTen} layout="fill" className={Location.image} />
          </div>
          <div className={Location.details}>
            Address :
            <span className={Location.bold}>
              1600 N. Olden Ave. Ewing, NJ 08632
            </span>
            <br />
            Phone No : <span className={Location.bold}>609-392-2800</span>
            <br />
            {/* Email :<span className={Location.bold}>
              meccavenango@gmail.com
            </span>
            <br /> */}
            <button>
              <a href="https://goo.gl/maps/PQS4en1mTbeqveEu6" target="_blank">
                Go To Direction
              </a>
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default locationnew;
