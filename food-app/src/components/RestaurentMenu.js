import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";


const RestaurentMenu = () =>{
    const { resId} = useParams();

      const resInfo = useRestaurentMenu(resId)

    

      if (resInfo === null) return (<Shimmer/>);

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