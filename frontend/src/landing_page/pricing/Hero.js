import React from 'react'

function Hero() {
  return (
    <div className="container " style={{marginTop:"140px", paddingBottom:"100px"}}>
      <div className="row p-4 mt-5 text-center  border-bottom">
      <h1>Pricing</h1>
      <p className='fs-5 mt-3 text-muted'>Free equity investementas and flat $20 traday and F&O trades</p>
      </div>
       <div className="row p-4 mt-5 text-center">
      <div className="col-4 p-5">
      <img src="media/images/pricing0.svg" alt="" />
      <h1 className='mt-3' style={{fontSize:"28px"}}>Free equity delivery</h1>
      <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
      </div>
      <div className="col-4 p-4">
      <img src="media/images/intradayTrades.svg" alt="" />
      <h1 className='mt-3' style={{fontSize:"28px"}}>Intraday and F&O trades</h1>
      <p className='text-muted mt-3'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
      </div>
      <div className="col-4 p-4">
      <img src="media/images/pricingMF.svg" alt="" />
      <h1 className='mt-3' style={{fontSize:"28px"}}>Free direct MF</h1>
      <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
      </div>
      </div>
    </div>
  )
}

export default Hero