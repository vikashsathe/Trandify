import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learMore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div
        className="row"
        style={{ justifyContent: "space-evenly", marginLeft: "150px" }}
      >
        <div className="col-6 mt-4">
          <h1 className="mt-4">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <div className="mt-4">
            <a href={learMore} style={{ paddingRight: "50px" }}>
              <span>{learMore}</span> <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
  
        </div>
        <div className="col-6">
          <img src={imageURL} alt="" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
