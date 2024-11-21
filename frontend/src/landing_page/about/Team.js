import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row" style={{justifyContent:"space-evenly"}}>
        <div className="col-4 text-muted">
          <p className="mb-4">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p className="mb-4">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-4 text-muted">
          <p className="mb-4">
            {" "}
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p className="mb-4">
            Rainmatter, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>

          <p>
            {" "}
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
      <h1 className="text-center mb-5 mt-5">People</h1>
      <div className="row mt-5"  style={{justifyContent:"space-evenly"}}>
        <div className="col-6 text-center">
          <img src="/media/images/nithinKamath.jpg" alt="" style={{width:"45%",borderRadius:"50%", paddingTop:"2px"}}/>
          <h3 className="text-muted fs-5 mt-3">Nithin Kamath</h3>
          <p className="text-muted">Founder, CEO</p>
        </div>
        <div className="col-6 text-muted" >
       <p className="mb-4"> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

       <p className="mb-4">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

       <p className="mb-4">Playing basketball is his zen.</p>

       <p>Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
