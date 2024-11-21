import React from 'react'

function Hero() {
  return (
    <div className="container p-5 mb-5 mt-5" style={{margin: "0 75px"}}>
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="HeroImage" className='mb-5' />
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='mt-4'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button style={{width:"20%", margin: "0 auto"}} className='btn mt-4 btn-primary fs-5'>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero