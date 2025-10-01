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

  const colors = ["#FFF201", "#C3171E"]
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

          <h2> Home </h2>
          <h2> Menu </h2>
          <h2> Reviews </h2>
          <h2> Contact Us </h2>

        </nav>

        
        <div className='w-full h-100 bg-[radial-gradient(circle,_#FFF201,_#C3171E)] pt-10 text-center flex justify-center relative '>

          <div className='h-40 font-serif z-10 text-xl flex flex-col gap-5 pt-3 '>   
            <div className=' '>  Welcome To  </div>

            <div className=' text-3xl font-bold'>  Noah's Vietnamese  </div>

            <div className='  text-3xl font-bold'>  Fusion Cuisine </div>

          </div>
          


          <img className="absolute bottom-0  z-0  translate-y-0.5"src={pho}/>
        </div>
        
        <div className='w-full h-100  text-black text-center max-[400px]:h-70'> 
         


          <FoodCard/>
          


        </div>
        <div className='w-full h-100 bg-amber-100 text-center text-black flex justify-start flex-col items-center gap-5'   >

            <h2 className='pt-2'> What Our Customers Have To Say </h2> 

            <ReviewCard/>

           
        </div>


        
        
        <div className='w-full h-100 bg-white text-black p-5'> 
          <h2 className='w-full text-center text-3xl'> Contact Us</h2>

          <h2 className='text-2xl mt-3'> Noah's Vietnamese Fusion Cuisine </h2>
          <h2 className='underline mt-1'> 1327 W 18th St</h2>
          <h2 className='underline'> Merced, CA 95340 </h2>

          <h2 className='underline'> (209) 349 8660 </h2>

          <h2 className='text-2xl mt-5'> Business Hours</h2>

          <h2> Mon & Tue: Closed</h2>
          <h2> Wed - Sat:   10 AM - 9 PM</h2>
          <h2> Sun:   11 AM - 8 PM</h2>
        </div>

       

      </div>
      
    
    </>
  )
}

export default App
