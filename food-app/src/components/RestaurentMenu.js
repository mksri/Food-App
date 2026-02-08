import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import dataObj from "../utils/mockData";
import { CDN_URL } from "../utils/constants";


const RestaurentMenu = () =>{
    const { resId} = useParams();

      const resInfo = useRestaurentMenu(resId)
      
      const restaurent = dataObj.restaurants.find(
        (res) => res.info.id === resId
      )

      console.log(restaurent)
    

      if (resInfo === null) return (<Shimmer/>);


    return  (
        <div className="min-h-screen flex items-center justify-center from-slate-50 to-slate-100 px-4 border-2">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
            <img className="h-50 w-full object-cover" src={ CDN_URL + restaurent.info.cloudinaryImageId}></img>
            <div className="p-6 text-center space-y-4">
      <h1 className="text-2xl font-extrabold text-gray-800">
        {restaurent.info.name}
      </h1>

      <div className="flex justify-center">
        <span className="rounded-full bg-green-100 px-4 py-1 text-green-700 font-semibold">
          ⭐{restaurent.info.avgRating}
        </span>
      </div>

      <p className="text-gray-600 font-medium">
       {restaurent.info.costForTwo}
      </p>

      <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 text-white font-semibold shadow-md hover:bg-orange-600 hover:scale-105 transition">
        View Menu
      </button>
    </div>
        </div>
        </div>
    )
}

export default RestaurentMenu;