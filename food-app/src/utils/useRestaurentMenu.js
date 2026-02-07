import { useState, useEffect } from "react";
// custom hooks
const useRestaurentMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    //fetchData

   useEffect(() => {

        fetchMenu();


    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.31500&lng=83.00580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
      
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestaurentMenu;