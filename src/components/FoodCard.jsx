import { useEffect, useState } from "react";

const slides = [
  { id: 1, color: "bg-red-400", text: "Food 1" },
  { id: 2, color: "bg-blue-400", text: "Food 2" },
  { id: 3, color: "bg-green-400", text: "Food 3" },
];

export default function FoodCard() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // change slide every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`flex-shrink-0 w-full h-full flex items-end justify-center text-white text-2xl pb-3 ${slide.color}`}
          >
            {slide.text}
          </div>
        ))}
      </div>

      
    </div>
  );
}
