 
 import React from 'react'
 import {Hero} from '../components/Hero';
 import {FeaturedProducts} from './FeaturedProducts' 
 import {Testimonials} from './Testimonials'
 import {Faq} from './Faq'
import useTitle from '../../../hooks/useTitle';
 function Homepage() {
  useTitle("Home-CodeBook")
   return (
    <main>
       <Hero />
      <FeaturedProducts />
      <Testimonials/>
      <Faq />
    </main>
    
   )
 }
 
 export default Homepage
 