import React from "react";

function Hero() {
  return (
    <div
      className="container-fluid mb-5"
      style={{ background: "#387ed1", color: "#fff" }}
    >
      <div
        className="p-5 mb-5 mt-5"
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 150px",
        }}
      >
        <h4>Support Portal</h4>
        <a style={{color:"#FFF"}} href="">Track tickets</a>
      </div>
      <div className="row p-2 m-3">
        <div className="col-6 p-3">
          <h2>Search for an answer or browse help topics to create a ticket</h2>
          <input
            className="mt-4"
            type="search"
            placeholder="Eg. How do i activate F&O"
            style={{
              width: "100%",
              borderRadius: "6px",
              border: "none",
              outline: "none",
              height: "60px",
            }}
          />
          <a style={{color:"#FFF"}} href="">Track account opening </a>
          <a style={{color:"#FFF"}} href="">Track segment activation </a>
          <a style={{color:"#FFF"}} href="">Intraday margins </a>
          <br />
          <a style={{color:"#FFF"}} href="">Kite user manual</a>
        </div>
        <div className="col-6">
          <h2>Featured</h2>
          <ol>
            <a style={{color:"#FFF"}} href="">
              {" "}
              <li>Trading holiday on account of Gurunanak Jayanti</li>
            </a>
            <a style={{color:"#FFF"}} href="">
              {" "}
              <li>Rights Entitlements listing in November 2024</li>
            </a>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
