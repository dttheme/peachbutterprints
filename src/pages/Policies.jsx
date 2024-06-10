import React from "react";

import { Card } from "../components";

const Policies = () => {
  return (
    <Card>
      <h2>Policies</h2>
      <h3>Shipping</h3>
      <ul>
        <li>
          Processing Time: Orders are processed within 3-5 business days if
          shipping from Atlanta. Prints shipping from a 3rd party may take
          longer.
        </li>
        <li>
          Shipping Time: Delivery typically takes 5-7 business days within the
          US. International shipping times vary.
        </li>
        <li>
          Tracking: You will receive a tracking number once your order has
          shipped.
        </li>
      </ul>
      <h3>Returns</h3>
      <ul>
        <li>Timeframe: Contact us within 14 days of receiving your print.</li>
        <li>
          Condition: Prints must be returned undamaged and in original
          packaging.
        </li>
        <li>
          Shipping Costs: Customers pay for return shipping. Please use a
          trackable service.
        </li>
        <li>
          Refunds: Refunds are processed within 7-10 business days after we
          receive and inspect the return.
        </li>
      </ul>
      <h3>Non-returnable items</h3>
      <ul>
        <li>
          Custom and personalized prints are non-returnable unless damaged.
        </li>
      </ul>
      <h3>Non-Returnable Items</h3>
      <ul>
        <li>
          Damaged or Defective Items: Email us at{" "}
          <a href="mailto:peachbutterprints@gmail.com">
            peachbutterprints@gmail.com
          </a>{" "}
          with photos of the damage for a replacement or refund.
        </li>
        <li>
          Unique Variations: Each linocut print is handmade and may have slight
          variations, making each piece unique. These variations are not
          considered defects.
        </li>
      </ul>
      <p>
        Thank you for shopping with Peach Butter Prints! For questions, contact
        us at{" "}
        <a href="mailto:peachbutterprints@gmail.com">
          peachbutterprints@gmail.com
        </a>
        .
      </p>
    </Card>
  );
};

export default Policies;
