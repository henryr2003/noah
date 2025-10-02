
import "../App.css"
import {useState, useEffect} from "react"
import reviews from "../text/reviews"
import stars from "../img/stars.webp"
function ReviewCard(){



    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect( () => {

        const changeSize = () => setWindowSize(window.innerWidth);

        window.addEventListener("resize", changeSize);

        return () => window.removeEventListener("resize", changeSize);
    }, [])
   

    const currentReviews = windowSize < 768 ? reviews.slice(0,2) : reviews;

    return(

        <> 

            {currentReviews.map( (singleReview, index) => (
                
                <div key={index} className=" border-2 w-90 h-40 rounded-xl shadow-2xl bg-white">
                    <div key={index} className="flex gap-2 pl-5 pt-3 items-center">

                        <p className="font-bold"> {singleReview.name}</p>
                        <img className="w-30 h-auto "src={stars} />
                        
                    </div>

                    <p className="p-1 text-sm  h-auto"> {singleReview.review} </p>
                 </div>
                ))}

               
            

                
                
                
                
              
         
        </>
    )
}

export default ReviewCard;