import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurentMenu = () =>{

    const [resInfo, setResInfo] = useState(null);
    const { resId} = useParams();

    useEffect(() => {

        fetchMenu();


    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.31500&lng=83.00580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        setResInfo(json.data)

      if (resInfo === null) return (<Shimmer/>);
      
    }

  // const { name, cuisine, costForTwo } = resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.info;

    return  (
        <div className="res-menu">
            <h1>{name}</h1>
            <h2></h2>
             <h2></h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Coke</li>
            </ul>

        </div>
    )
}

export default RestaurentMenu;