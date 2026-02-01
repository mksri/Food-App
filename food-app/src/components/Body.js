import RestaurentCard from "./RestaurentCard";
import dataObj from "../utils/mockData";

const Body = () =>{
    return(
        <div className="body">
            <div className="search-bar">Search</div>
            <div className="res-container">
                {
                 
                 dataObj.restaurants.map(restaurent => 
                    (
                    <RestaurentCard key={restaurent.info.id} resData={restaurent}/> 

                    ))
                    
                }
               
            </div>          
        </div>
    )
}

export default Body;