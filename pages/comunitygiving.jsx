import React from "react";
import Image from "next/image";
import CoumnityGiving from "../styles/CoumnityGiving.module.scss";
import communityOne from "./assets/communityOne.PNG";
import communitytwo from "./assets/communitytwo.PNG";
import communitythree from "./assets/communitythree.PNG";
import communityfour from "./assets/communityfour.PNG";

const comunitygiving = () => {
  return (
    <div className={CoumnityGiving.comunitygiving_wrapper}>
      <h5 className={CoumnityGiving.small_heading}>COMMUNITY GIVING</h5>
      <div className={CoumnityGiving.comunitygiving_div}>
        <h6>COMMUNITY GIVING</h6>
        <p>
          Furniture Mecca's community efforts focus on volunteering with and
          giving to charitable organizations that provide research,prevention
          and treatment of diseases affecting women and children.Furniture
          Mecca's associates and their family members often volunteer for these
          causes.Here are a few of the major charities Furniture Mecca has
          supported
        </p>
      </div>

      {/* images wrapper one*/}
      <div className={CoumnityGiving.allimages_wrapper}>
        {/* image one */}
        <div className={CoumnityGiving.imagediv_wrapper}>
          <div className={CoumnityGiving.imagediv}>
            <Image
              src={communityOne}
              layout="fill"
              className={CoumnityGiving.image}
            />
          </div>
          <p>
            We're proud supporters of the
            <span className={CoumnityGiving.span_bold}>
              American National Red Cross
            </span>
            humanatarian organization that provides emergency
            assistance,disaster relief, and disaster preparedness education in
            the United State
          </p>
        </div>

        {/* image two */}
        <div className={CoumnityGiving.imagediv_wrapper}>
          <div className={CoumnityGiving.imagediv}>
            <Image
              src={communitytwo}
              layout="fill"
              className={CoumnityGiving.image}
            />
          </div>
          <p>
            The
            <span className={CoumnityGiving.span_bold}>
              Philadelphia Police Department
            </span>
            is one of the oldest municipal police agencies in the country & they
            work to keep the city of philadelphia safe and free of crime . Our
            financial support works to help the police department
          </p>
        </div>
      </div>

      {/* images wrapper two */}
      <div className={CoumnityGiving.allimages_wrapper}>
        {/* image three */}
        <div className={CoumnityGiving.imagediv_wrapper}>
          <div className={CoumnityGiving.imagediv}>
            <Image
              src={communitythree}
              layout="fill"
              className={CoumnityGiving.image}
            />
          </div>
          <p>
            By investing financial resources into the
            <span className={CoumnityGiving.span_bold}>
              Philadelphia Fire Department
            </span>
            ,Furniture Mecca is able to assist in providing fire protection and
            emergency medical services to the city of philadelphia
          </p>
        </div>

        {/* image four */}
        <div className={CoumnityGiving.imagediv_wrapper}>
          <div className={CoumnityGiving.imagediv}>
            <Image
              src={communityfour}
              layout="fill"
              className={CoumnityGiving.image}
            />
          </div>
          <p>
            Furniture Mecca Partnered with
            <span className={CoumnityGiving.span_bold}>
              Susan G. Komen Philadelphia
            </span>
            for the month of October to help raise money during Breast Cancer
            Awareness Month.For every donation we received,Furniture Mecca
            matched it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default comunitygiving;
