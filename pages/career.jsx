import logo from "../components/assets/m_logo_360.png";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import mycarrer from "../styles/Career.module.scss";

const career = () => {
  return (
    <div className={mycarrer.carrer_wrapper}>
      <h1>career</h1>
      <div className={mycarrer.carrer_detail}>
        <h3>We are Hiring</h3>
        <h4>
          Furniture Mecca is seeking new team members <br />
          for the Following roles
        </h4>
        <p>
          Delivery Derivers <span>$15-40/hr</span>
          <br />
          Sales Associates <br />
          Warehouse Associates <br />
          Customers Care Associates <br />
          Ecommerce <br />
        </p>
        <h5 className={mycarrer.email}>
          Send Your resume to <span>meccahumanresources@gmail.com</span>
        </h5>

        <div className={mycarrer.logo}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="logo"
                // layout="fill"
                // objectFit="contain"
                // priority
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default career;
