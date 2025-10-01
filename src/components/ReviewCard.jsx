
import "../App.css"

import reviews from "../text/reviews"
import stars from "../img/stars.webp"
function ReviewCard(){



    return(

        <> 

            {reviews.map( (singleReview, index) => (

                <div key={index} className="w-90 h-40 rounded-xl shadow-2xl bg-white">
                    <div key={index} className="flex gap-2 pl-5 pt-3 ">

                        <p> {singleReview.name}</p>
                        <img src={stars}/>
                        
                    </div>

                    <p> {singleReview.review} </p>
                 </div>
                ))}

               
            

                
                
                
                
              
         
        </>
    )
}

export default ReviewCard;