import React from 'react'

function Brokerage() {
  return (
    <div className="container">
     <div className="row p-4 mt-5 text-center">
    <div className="col-8 p-4">
    <a href='' style={{textDecoration:"none"}}><h4>Brokerage calculator</h4></a>
    <ul className='text-start text-muted' style={{lineHeight:"2.5", fontSize:"14px"}}>
      <li>Call & Trade and RMS auto-squareoff: Additional charges 0f $50 + GST per order.</li>
      <li>Digital contract notes be send via e-mail.</li>
      <li>Physical copies of contract notes, if requires, shall be charged &20 per contract notes. Couries charges apply</li>
      <li>For NRI account (non-PIS), 0.5% or $100 per executed order for equity (whichever is lower) </li>
      <li>If the account is in debit balance =, any other placed will be charged $40 per executed order instead of $20 per executed order</li>
    </ul>
    </div>
    <div className="col-4 p-4">
    <a href='' style={{textDecoration:"none"}}><h4>List of charges</h4></a>
    </div>
    
    </div>
  </div>
  )
}

export default Brokerage