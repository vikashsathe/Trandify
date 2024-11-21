import React from "react";

function Universe() {
  return (
    <div className="container ">
      <div className="row text-center">
        <h3 className="mt-5">The Zerodha Universe</h3>
        <p className="mt-4 mb-5">TExtend your trading and investment experience even further with our partner platforms</p>

        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" alt="" style={{width:"45%"}}/>
          <p className="text-small">
          Thematic investing platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" alt="" style={{width:"45%"}}/>
          <p className="text-small">
          Algo & strategy platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:"45%"}}/>
          <p className="text-small">
         Options trading platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" alt="" style={{width:"45%"}}/>
          <p className="text-small">
            Asseta management
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" alt="" style={{width:"45%"}}/>
          <p className="text-small">
          Bonds trading platform
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" alt="" style={{width:"45%"}}/>
          <p className="text-small">
          Insurance
          </p>
        </div>

        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="btn mt-4 btn-primary fs-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
