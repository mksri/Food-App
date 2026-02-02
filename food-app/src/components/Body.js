import RestaurentCard from "./RestaurentCard";
import dataObj from "../utils/mockData";
import { useState , useEffect } from "react";

const Body = () =>{

    const [listRestaurent, setListRestaurent] = useState([]);

    useEffect( () =>{
        console.log("Use effect is called after body component render finsihes");
        fetchData();

    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.31500&lng=83.00580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


        const json = await data.json();
        console.log(json);
        setListRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }

    

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