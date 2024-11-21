import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import HomePage from './landing_page/home/HomePage.js'
import Signup from './landing_page/singup/Signup.js'
import About from './landing_page/about/AboutPage.js'
import Products from './landing_page/products/Products.js'
import Pricing from './landing_page/pricing/PricingPage.js'
import Support from './landing_page/suport/suport.js'
import NotFound from './landing_page/NotFound.js'
import Navbar from './landing_page/Navbar.js'
import Footer from './landing_page/Footer.js'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/pricing" element={<Pricing />}/>
    <Route path="/support" element={<Support />}/>
    <Route path="*" element={<NotFound />}/>
  </Routes>
  <Footer />
  </BrowserRouter>
)
