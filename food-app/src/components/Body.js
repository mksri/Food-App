import RestaurentCard from "./RestaurentCard";
import dataObj from "../utils/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurentCard";
import { Link } from "react-router-dom";

const Body = () =>{

    const [listRestaurent, setListRestaurent] = useState(dataObj.restaurants);
    const [filteredRestaurent, setFilteredRestaurent] = useState(dataObj.restaurants);
    const [searchText, setSearchText] = useState("");

    const PromotedRestaurentCard = withPromotedLabel(RestaurentCard);

    useEffect( () =>{
        console.log("Use effect is called after body component render finsihes");
        //fetchData();
        console.log(dataObj.restaurants);

    }, []);
    

    console.log("BOdy rendered");

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.469414&lng=78.367123&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


        const json = await data.json();
        console.log(json);

        //optional chaining
        
       // setListRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       // setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(useOnlineStatus === false)
        return(
    <h1>You are offline</h1>
    )

    console.log(listRestaurent);

    return listRestaurent.length === 0 ? <Shimmer/> : (
        <div className="m-4 bg-lime-50">
            <div className="filter">
                <button className="from-green-50 font-bold hover:text-orange-600 mr-6 mb-8 ml-6" onClick ={() => {

              const filteredRestaurent = listRestaurent.filter(
                    (res) => res.info.avgRating > 4
                )              
                setListRestaurent(filteredRestaurent);
            }                
                
            } 
                >
                    Top Rated Restaurent
                    </button>
                    <div className="flex items-center justify-center mb-8">
                        <input type="text" className="flex w-full max-w-md items-center rounded-full bg-white shadow-md px-6 py-2 m-9" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                        <button className="from-green-50 font-bold hover:text-orange-600 mr-6" onClick={()=>{
                            console.log("cicked",searchText)
                            const filteredList = listRestaurent.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            console.log("filteredList",filteredList)
                            setFilteredRestaurent(filteredList);
                        }}>Search</button>
                    </div></div>
            <div className="flex flex-wrap justify-center gap-8 px-6 py-8 bg-slate-50">
                {
                 filteredRestaurent.map(restaurent => 
                        <Link key={restaurent.info.id} 
                        to={`/restaurent/${restaurent.info.id}`}>
                   {restaurent.info.promoted ? <PromotedRestaurentCard resData={restaurent}/>  :
                    <RestaurentCard resData={restaurent}/> }
                    </Link>
                  )};
                    
               
            </div>          
        </div>
    )
}

export default Body;