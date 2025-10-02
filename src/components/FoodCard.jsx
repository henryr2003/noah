import { useEffect, useState } from "react";
import images from "../text/images"

const slides = [
  { id: 1, color: "bg-red-400", text: "Food 1" },
  { id: 2, color: "bg-blue-400", text: "Food 2" },
  { id: 3, color: "bg-green-400", text: "Food 3" },
];

const food = [

  {src: "../img/chowMein.png"},
  {src:"../img/shrimpPho.png"},
  {src:"../img/potstickers.png"}
]
export default function FoodCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden ">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-full flex flex-col items-center justify-end gap-5 text-white text-2xl pb-3 bg-amber-300`}
          >
            <img className="w-auto h-70 rounded-2xl shadow-xl border-2 border-amber-600 max-[400px]:h-50 md:h-80" src={images[index].src}/>
            <p className="text-2xl font-bold"> {images[index].name}</p>
          </div>
        ))}
      </div>

      
    </div>
  );
}
