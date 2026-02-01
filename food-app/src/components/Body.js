import RestaurentCard from "./RestaurentCard";
import dataObj from "../utils/mockData";
import { useState } from "react";

const Body = () =>{

    const [listRestaurent, setListRestaurent] = useState(dataObj.restaurants);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick ={() => {

              const filteredRestaurent = listRestaurent.filter(
                    (res) => res.info.avgRating > 4.5
                )              
                setListRestaurent(filteredRestaurent);
            }                
                
            } 
                >
                    Top Rated Restaurent
                    </button></div>
            <div className="res-container">
                {
                 
                 listRestaurent.map(restaurent => 
                    (
                    <RestaurentCard key={restaurent.info.id} resData={restaurent}/> 

                    ))
                    
                }
               
            </div>          
        </div>
    )
}

export default Body;