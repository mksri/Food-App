import RestaurentCard from "./RestaurentCard";
import dataObj from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listRestaurent, setListRestaurent] = useState([]);
    const [filteredRestaurent, setFilteredRestaurent] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect( () =>{
        console.log("Use effect is called after body component render finsihes");
        fetchData();

    }, []);
    

    console.log("BOdy rendered");

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.31500&lng=83.00580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


        const json = await data.json();
        console.log(json);

        //optional chaining
        
        setListRestaurent(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurent(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listRestaurent.length === 0 ? <Shimmer/> : (
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
                    </button>
                    <div className="search-bar">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button onClick={()=>{
                            console.log("cicked",searchText)
                            const filteredList = listRestaurent.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            console.log("filteredList",filteredList)
                            setFilteredRestaurent(filteredList);
                        }}>Search</button>
                    </div></div>
            <div className="res-container">
                {
                 
                 filteredRestaurent.map(restaurent => 
                    (
                    <RestaurentCard key={restaurent.info.id} resData={restaurent}/> 

                    ))
                    
                }
               
            </div>          
        </div>
    )
}

export default Body;