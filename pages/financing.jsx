import React from "react";
import Image from "next/image";
import Financing from "../styles/Financing.module.scss";
import financingmaindifferences from "./assets/financingmaindifferences.PNG";
import bed from "./assets/bed.webp";
import nocreditone from "./assets/nocreditone.PNG";
import nocredittwo from "./assets/nocredittwo.PNG";
import nocreditthree from "./assets/nocreditthree.PNG";
import nocreditfour from "./assets/nocreditfour.PNG";
import nocreditfive from "./assets/nocreditfive.PNG";

const financing = () => {
  return (
    <div className={Financing.Financing_wrapper}>
      <h6 className={Financing.small_heading}>LEASING & FINANCING</h6>
      <h5 className={Financing.heading_red}>Financing For Everyone!</h5>
      <div className={Financing.imagediv}>
        <Image src={bed} layout="fill" className={Financing.image} />
      </div>
      <h5 className={Financing.heading_red}>Its Easy to Get Started</h5>

      {/* getstart_wrapper */}
      <div className={Financing.getstart_wrapper}>
        <div className={Financing.getstart_div}>
          <h4>GET APPROVED</h4>
          <p>
            Choose one of the finance options below.We offer no credit needed
            financing to traditional financing.it's fast and convenient! Once
            you've submitted your application, it takes only a few minutes to
            process your appliation.
          </p>
        </div>
        <div className={Financing.getstart_div}>
          <h4>SHOP</h4>
          <p>
            We want to help you get what you need, Shop online or use our Store
            Locator to find a furniture Mecca store near you and get shopping!
          </p>
        </div>
        <div className={Financing.getstart_div}>
          <h4>CHECK OUT</h4>
          <p>
            We make your lease-purchase financing experience as simple and easy
            as possible.you'll receive an instant email with access to your
            approved amount. Just show it to your sales associate so they can
            wrap up finish your transaction
          </p>
        </div>
      </div>

      {/* financingmaindifferences */}
      <div className={Financing.differenceimagediv}>
        <Image
          src={financingmaindifferences}
          layout="fill"
          className={Financing.image}
        />
      </div>

      {/* No Credit Nedded Options */}
      <h5 className={Financing.heading}>No Credit Nedded Options</h5>

      {/* no creditOptions_wrapper one */}
      <div className={Financing.creditOptions_wrapper}>
        {/* no creditOptions_div one */}
        <div className={Financing.creditOptions_div}>
          <h3>Get approved for up to $3000</h3>
          <ul>
            <li>
              No Soft or hard credit pull from the major credit
              bureaus(Experian, Equifax, Transunion)
            </li>
            <li>13 Month Leasing Option</li>
            <li>90 Days Same as Cash</li>
            <li>Virtual Banks & Payroll Cards Accepted</li>
            <li>TRUE No Money Down Experience</li>
            <li>$25 Processing Fees Collected AFTER Delivery</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditone}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>

        {/*no creditOptions_div two */}
        <div className={Financing.creditOptions_div}>
          <h3>Get approved for up to $5000</h3>
          <ul>
            <li>101 Day Early Buyout/Payoff Period</li>
            <li>6-24 Month Payment Options</li>
            <li>100% Completely Paperless Transaction</li>
            <li>Day One Owernership on credit products serviced by AFF</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocredittwo}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>
      </div>

      {/* no creditOptions_wrapper two */}
      <div className={Financing.creditOptions_wrapper}>
        {/*no creditOptions_div three */}
        <div className={Financing.creditOptions_div}>
          <h3>Get approved for up to $3000</h3>
          <ul>
            <li>No Credit Needed</li>
            <li>12 Month Leasing Option</li>
            <li>100 Days Same as Cash</li>
            <li>Bad Credit? No Credit? No Problem!</li>
            <li>High Approval Rates & Amounts</li>
            <li>$39 Processsing Fees Collected AFTER Delivery</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditthree}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>

        {/*no creditOptions_div four */}
        <div className={Financing.creditOptions_div}>
          <h3>Get approved for up to $5000</h3>
          <ul>
            <li>No Credit Needed</li>
            <li>12 Month Leasing Option</li>
            <li>90 Days Same as Cash</li>
            <li>Easy Payment Options</li>
            <li>Instant Decisions</li>
            <li>$54 Processsing Fees Collected AFTER DELIVERY</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditfour}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>
      </div>

      {/*no creditOptions_wrapper three */}
      <div className={Financing.creditOptions_wrapper}>
        {/*no creditOptions_div five */}
        <div className={Financing.creditOptions_div}>
          <h3>Get approved for up to $3000</h3>
          <ul>
            <li>No Credit Needed</li>
            <li>12 Month Leasing Option</li>
            <li>120 Days 5% Buy Out Option</li>
            <li>Flexible Lease Terms.</li>
            <li>
              e Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>$49 Processsing Fees Collected AFTER DELIVERY</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditfive}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>
      </div>

      <h5 className={Financing.heading}>Credit Reqiured Options</h5>

      {/* creditOptions_wrapper one */}
      <div className={Financing.creditOptions_wrapper}>
        {/* creditOptions_div one */}
        <div className={Financing.creditOptions_div}>
          {/* <h3>Get approved for up to $3000</h3> */}
          <ul>
            <li>6 Month Same as Cash 0% Interest</li>
            <li>12 Month Finance Option</li>
            <li>Flexible Finance Terms</li>
            <li>$0 Processing Fees</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditthree}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>

        {/* creditOptions_div two */}
        <div className={Financing.creditOptions_div + " " + Financing.remove_bottom_bordoer}>
          {/* <h3>Get approved for up to $3000</h3> */}
          <ul>
            <li>6 Month Same as Cash 0% Interest</li>
            <li>12 Month Finance Option</li>
            <li>Flexible Finance Terms</li>
            <li>$0 Processing Fees</li>
          </ul>
          <div className={Financing.creditOptionsimg_div}>
            <Image
              src={nocreditfour}
              layout="fill"
              className={Financing.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default financing;
