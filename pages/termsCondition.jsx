import React from "react";
import conditions from "../styles/TermsCondition.module.scss";
import Link from "next/link";
import Image from "next/image";
import termscondition from "./assets/term&condition.jpg";

const termsCondition = () => {
  return (
    <div className={conditions.termsCondition_wrapper}>
      <h1>Terms & Conditions</h1>
      <h6>What happens after your order is placed online:</h6>
      <p>
        Allow for 24-48 hours for your order to process and for Furniture Mecca
        to contact you with a delivery date. <br />
        Online transactions are not available for same day pickup. <br />
        All online orders require cardholder to be present with valid government
        issued identification and credit card used in transaction. <br />
        Any damages must be reported to the driver at time of delivery, if not
        reported before driver leaves, we are not responsible. <br />
        All picked up merchandise from our 101 E. Venango St. warehouse can only
        be exchanged within 24 hours and must be in original package un-opened.
        <br />
        Feel free to e-mail
        <Link href="mailto:meccacares@myfurnituremecca.com">
          <span className={conditions.span_red}>
            meccacares@myfurnituremecca.com
          </span>
        </Link>
        if you ave any questions or call us at 215-352-1600. <br />
      </p>

      {/* image */}
      <div className={conditions.img}>
        <Link href="/terms&condition">
          <a>
            <Image
              src={termscondition}
              alt="logo"
              // layout="fill"
              // objectFit="contain"
              // priority
            />
          </a>
        </Link>
      </div>

      <h6>What happens after your order is placed online:</h6>

      <p>
        Allow for 24-48 hours for your order to process and for Furniture Mecca
        to contact you with a delivery date. <br />
        Online transactions are not available for same day pickup <br />
        All online orders require cardholder to be present with valid government
        issued identification and credit card used in transaction.. <br />
        Any damages must be reported to the driver at time of delivery, if not
        reported before driver leaves, we are not responsible.
        <br />
        All picked up merchandise from our 101 E. Venango St. warehouse can only
        be exchanged within 24 hours and must be in original package un-opened.
      </p>

      <h5>AMAZON CUSTOMER ONLY: RETURN, DAMAGE AND CANCELLATION POLICY</h5>

      <h6>Standard Return Policy:</h6>

      <p>
        If for any reason, you are not satisfied with your purchase, we will
        gladly accept your return request on most brands within 30 days of
        receiving your item(s). If you return an item that is offered with free
        shipping, the original outbound shipping costs will be deducted from
        your refund and the return shipping is the responsibility of the
        customer. In addition, a restocking fee* will be applicable to items
        being returned.
      </p>

      <h6>Non-returnable items:</h6>
      <ul>
        <li>Assembled and/or Modified items</li>
        <li>Mattresses</li>
        <li>Custom made or special order items (Example: fabric changes)</li>
        <li>Opened bedding materials</li>
        <li>Items without original packaging</li>
        <li>Open package</li>
      </ul>

      <p>
        In the rare case that your item(s) unfortunately arrive damaged or
        defective, replacements are usually offered at no charge. Simply note
        any damage upon delivery and contact us immediately. Should you choose
        not to pursue replacements the damaged or defective products can be
        returned for credit to the delivery driver before they leave.
      </p>
      <p>
        All cancellation requests are forwarded directly to the manufacturer.
        Cancellation requests are not accepted on items that have shipped or
        been prepared for shipping. A refusal of the item at delivery will be
        considered a Return and credit will be issued back to your original
        payment method minus restocking fee and round-trip shipping charges.
        Please note that all items are shipped directly from the manufacturer’s
        warehouse and if we do not have tracking at the time you request
        cancellation, this does not mean your order has not shipped.
      </p>
      <p>
        You will have 5 business days to respond to the carrier or contact us to
        reschedule delivery (some fees may apply). After this timeframe has
        elapsed and no delivery has been scheduled the order will be returned
        and refunded under our Standard Return Policy.
      </p>

      <h6>*Restocking Fees Are 20 – 25%</h6>

      <h6>Receiving your Product</h6>

      <p>
        Tracking details confirming how your order will be delivered will be
        emailed to you once your product ships out. These tracking details allow
        you to see which carrier will be delivering your item and will confirm
        the type of delivery it will be.
      </p>

      <h6>USPS, UPS, FedEx Ground Shipments</h6>
      <p>
        For all ground shipments you will be able to track your package online
        on the carriers website. This information will allow you to see an
        “estimated delivery date” which will give you the opportunity to be at
        home when the package is delivered. If you are not able to be at home
        the carrier does have the ability to leave the package at the front door
        if they deem it safe.
      </p>

      <h6>Truck Freight / White Glove Shipments</h6>

      <p>
        If you see that your order has shipped with a Truck Freight or White
        Glove Carrier please be sure to inspect both the packaging and product
        upon delivery. If the packaging or product is damaged in any way please
        be sure to note the damage on the delivery documents.
      </p>

      <h6>What if My Order Arrives Damaged or Defective</h6>
      <p>
        Our ultimate goal is to ensure you are fully satisfied with your order.
        Although it is rare for items to arrive damaged, we understand that it
        does occur on occasion. In the unlikely event that your order arrives
        damaged, we will make every effort to help you obtain the necessary
        replacements as quickly as possible and at no extra cost to you.
      </p>
      <p>
        In delivery, please ensure you fully inspect all packages. Should there
        be clear damage to both the packaging/product, please note this damage
        on the carrier’s paperwork (packaging and product damage must be noted)
        and refuse delivery of the damaged cartons.
      </p>
      <p>
        Should you notice any damage to the packaging (no matter how minor),
        please take a moment to open the packaging and inspect the product. In
        the event the product is also damaged, please note this damage on the
        carrier’s paperwork (packaging and product damage must be noted) and
        refuse delivery of the damaged cartons. Naturally, should the item be in
        good condition, please accept delivery as normal.
      </p>
      <p>
        Should you notice any damage to the packaging and the carrier will not
        allow you to open and inspect the product, please note the packaging
        damage on the carrier’s paperwork and accept the item. Upon inspection,
        if the product is also damaged, please contact us before the carrier
        leaves your home.
      </p>
      <p>
        For truck freight (back of truck, LTL) or White Glove deliveries, noting
        damage is essential. It is the customer’s responsibility to note any
        discrepancies to their order upon receipt. It is this notation that will
        allow us to provide the proper free replacements to you. Below is a
        sample of the correct way to sign for damage for our two larger truck
        freight carriers.
      </p>
      <p>
        Any damage or defective issues can be dealt with by logging into “My
        Account” or contacting our customer care team at 1-866-740-9830 to file
        a replacement request.
      </p>
      <p>
        When dealing with a damage/defect issue; photos are required. These will
        assist us when dealing with the manufacturer/carrier and ensure
        replacements are sent out as quickly as possible.
      </p>
      <p>
        In some cases you will be asked to identify the damaged parts by
        referencing the part number and description in the assembly
        instructions. All replacement requests are submitted directly to the
        manufacturer and depending on the severity of the damage they will
        determine if parts can correct the issue or if a new unit will need to
        be shipped out.
      </p>
      <p>
        Should you choose not to pursue replacements the damaged or defective
        products can be returned for credit as outlined in our Standard Return
        Policy.
      </p>

      <h6>Returning An Item or Order</h6>

      <p>
        Please contact us within 24 Hours of receipt of the item by logging into
        “My Account” to file a return request. An RMA Number (Return Merchandise
        Authorization) will be provided from the manufacturer and a return
        address and full return instructions will be provided will allow you to
        pick a suitable carrier and return the item back to the manufacturer.
        This process usually takes approximately 5-7 business days.
        <span className={conditions.span_bold}>
          Returned items without an RMA number will generally be refused by the
          return warehouse and credit will not be processed.
        </span>
      </p>

      <p>
        All items must be returned in their original packaging, unassembled, and
        unopened. We are unable to offer returns on modified or assembled items
        as the manufacturer will deem these “used”. Once you provide us with the
        return tracking number we will track your return to confirm its arrival
        back to the manufacturer. A refund will be credited to you once the
        manufacturer has received, inspected and confirmed undamaged.
      </p>
      <p>
        If you prefer not to receive replacements and we have determined that
        the damage that resulted was carrier related and the damage was noted
        upon receipt you can request a full refund. This process will take a
        little longer as we will need to retrieve the delivery documents to
        confirm it was correctly notated.
      </p>
      <p>
        You can expect to receive your refund within four weeks of shipping the
        product back to the manufacturer. In most cases, the refund will be
        issued sooner. The four week timeframe includes shipping time (5-14
        business days), product inspection (3-5 business days), and refund
        processing back to your payment method (3-5 business days)
      </p>

      <h6>How To Request Replacement</h6>

      <ol type="1">
        <li>
          Submit your replacement request within 10 days of receiving your order
          by logging into
          <Link href="/login">
            <span className={conditions.span_red}>My Account</span>
          </Link>
        </li>
        <li>
          Complete the request form in detail and follow any manufacturer
          special notes that are listed on the top of the request form. **
        </li>
        <li>
          Once the request has been submitted, you can expect to receive an
          email from our Replacements team within 5-7 business days.
        </li>
      </ol>

      <p>
        If you decide not to pursue replacements, your order can still be
        returned as outlined in our
        <Link href="/terms&condition">
          <span className={conditions.span_red}>Standard Return Policy</span>
        </Link>
      </p>

      <h6>For orders shipped White Glove or Truck Freight:</h6>

      <p>
        It is very important that the actual customer who placed the order be
        present to inspect the item and sign the delivery document. We
        understand that some deliveries may be rush but please ensure to take
        the time to thoroughly inspect the item and packaging prior to signing
        the delivery document
      </p>

      <p>
        It is the customer’s responsibility to notate all and any problems with
        the order at time of delivery. If the issues with the delivery are not
        properly noted on the shipping document, Cymax Stores may not be able to
        dispute this with the carrier or manufacturer on your behalf and offer a
        satisfactory solution.
      </p>
      <p>
        Follow the below steps to ensure that your order is properly signed for,
      </p>

      <ol type="1">
        <li>
          Inspect the product while the driver is on site and notate any
          problems or exceptions with the order on the delivery documents
          provided. Even if the package appears only slightly damaged, write
          “Package Damaged” when you sign for delivery. This is very important.
        </li>
        <li>
          Inspect all item pieces before assembling the product and report any
          problems to Cymax Stores immediately.
        </li>
        <li>
          We understand that some deliveries may be rush but please ensure to
          take the time to thoroughly inspect the item and packaging prior to
          signing the delivery document.
        </li>
      </ol>

      <h6>Changing An Item or Order</h6>

      <p>
        Due to our commitment to process orders quickly, there is a limited
        period of time in which your order can be cancelled. We are only able to
        accept cancellation requests via My Account or phone. Please follow the
        directions below to submit a cancellation request. Most requests are
        reviewed and responded to within 2-3 business days.
      </p>
      <p>
        Connect with us on My Account using the password provided by email when
        your order was placed. With My Account, you may request a cancellation
        online or check the tracking information.
      </p>
      <p>Please Note:</p>

      <ol type="1">
        <li>
          Your cancellation request will be sent to the manufacturer directly to
          confirm the order can be cancelled and that it has not been prepared
          for shipping.
        </li>
        <li>
          You will receive an email from us confirming if your cancellation
          request has been approved or declined.
        </li>
      </ol>

      <p>
        All cancellations are confirmed in writing: If you have not received an
        email confirmation, your order has not been cancelled. We are unable to
        cancel an order once it has shipped or if it has been prepared for
        shipping by the manufacturer.
      </p>
      <p>
        If we are unable to cancel your order as requested, you will receive a
        notification in writing explaining that your order was too late to
        cancel. If this should happen and you do not wish to receive your
        product, you may return it under our
        <Link href="/terms&condition">
          <span className={conditions.span_red}>Standard Return Policy</span>
        </Link>
        Please review this policy before refusing the product at delivery.
      </p>
      <p>
        If your order has successfully been cancelled, we will initiate a
        refund. The processing time frame for the refund to appear to your
        original method of payment is 7-10 business days from the date of the
        confirmation email. This time frame allows most financial providers
        sufficient processing time.
      </p>
    </div>
  );
};

export default termsCondition;
