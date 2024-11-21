import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tyrDemo,
  learMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div
        className="row"
        style={{ justifyContent: "space-evenly", marginLeft: "150px" }}
      >
        <div className="col-6">
          <img src={imageURL} alt="" style={{ width: "90%" }} />
        </div>
        <div className="col-6 mt-4">
          <h1 className="mt-4">{productName}</h1>
          <p className="mt-4">{productDescription}</p>
          <div className="mt-4">
            <a href={tyrDemo} style={{ paddingRight: "50px" }}>
            <span>{tyrDemo}</span> <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href={learMore}>
            <span>{learMore}</span>  <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} style={{paddingRight:"50px"}}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
