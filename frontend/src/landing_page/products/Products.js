import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSecction";
import Universe from "./Universe";

function Products() {
  return (
    <div className="mt-5 mb-5">
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tyrDemo=""
        learMore=""
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learMore="Learn More"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tyrDemo="Coin"
        learMore="Coin"
      />

      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learMore="Kite Contact"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tyrDemo="Coin"
        learMore=""
      />
      <h5 className="text-center text-muted"> Want to know more about our technology stack? Check out the
      Zerodha.tech blog.</h5>
      <Universe />
    </div>
  );
}

export default Products;
