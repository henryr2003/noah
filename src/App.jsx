import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FoodCard from "./components/FoodCard.jsx"
import ReviewCard from "./components/ReviewCard.jsx"
import pho from "../src/img/phoSmall.png"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [scrollTrue, setScroll] = useState(false);

  const colors = ["#FFF201", "#C3171E"];

  window.addEventListener("scroll", function () {
    const nav = this.document.querySelector("nav");

    if(this.window.scrollY > 20){
      nav.classList.add("bg-white")
    }
    else{
      nav.classList.remove("bg-white")
    }
  })

  return (
    <>
      
      <div className='w-full h-100 '>
        
       
        <nav className='fixed top-0 left-0 w-full h-12 bg-none flex text-black justify-center gap-10 items-center text-sm transition duration-750 ease-in-out z-100'> 

          <h2 className='cursor-pointer'> Home </h2>
          <h2 className='cursor-pointer'> Menu </h2>
          <h2 className='cursor-pointer'> Reviews </h2>
          <h2 className='cursor-pointer'> Contact Us </h2>

        </nav>

        
        <div className='w-full h-100 bg-[radial-gradient(circle,_#FFF201,_#C3171E)] pt-10 text-center flex justify-center relative '>

          <div className='h-40 font-serif z-10 text-xl flex flex-col gap-5 pt-3 lg:text-2xl mt-10'>   
            <div className=' '>  Welcome To  </div>

            <div className=' text-3xl font-bold lg:text-4xl'>  Noah's Vietnamese  </div>

            <div className='  text-3xl font-bold lg:text-4xl'>  Fusion Cuisine </div>

          </div>
          


          <img className="absolute bottom-0  z-0  translate-y-0.5 lg:relative"src={pho}/>
        </div>
        
        <div className='w-full h-100  text-black text-center max-[400px]:h-70'> 
         


          <FoodCard/>
          


        </div>
        <div className='w-full h-100 bg-amber-100 text-center text-black grid grid-cols-1 grid-rows-[30px_auto_auto] place-items-center lg:grid-cols-2'   >

            <h2 className='pt-2 row-start-1 row-end-2 col-start-1 col-end-2 lg:col-end-3'> What Our Customers Have To Say </h2> 

            <ReviewCard/>

           
        </div>


        
        
        <div className='w-full h-auto bg-white text-black p-5'> 
          <h2 className='w-full text-center text-3xl'> Contact Us</h2>
          <div className='lg:flex items-start justify-center gap-40 pt-10'>
            <div className=''>
              <h2 className='text-2xl mt-3'> Noah's Vietnamese Fusion Cuisine </h2>
              <h2 className='underline mt-1'> 1327 W 18th St</h2>
              <h2 className='underline'> Merced, CA 95340 </h2>

              <h2 className='underline'> (209) 349 8660 </h2>

              <h2 className='text-2xl mt-5'> Business Hours</h2>

              <h2> Mon & Tue: Closed</h2>
              <h2> Wed - Sat:   10 AM - 9 PM</h2>
              <h2> Sun:   11 AM - 8 PM</h2>

            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6346.970923842971!2d-120.49523617060972!3d37.30732682366156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091425a3b9aedcd%3A0x27fd7c5aad6cb13c!2sNoah%E2%80%99s%20Vietnamese%20Fusion%20Cuisine!5e0!3m2!1sen!2sus!4v1759355708289!5m2!1sen!2sus"
              height="450"
              className='w-90 h-90 mt-10 border-2 border-gray-400 lg:mt-5'
              allowFullScreen={true}
              loading="lazy">
              </iframe>

          </div>
        </div>

        

       

      </div>
      
    
    </>
  )
}

export default App
