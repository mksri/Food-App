import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import dataObj from "../utils/mockData";
import { CDN_URL } from "../utils/constants";
import RestaurentCategory from "./RestaurentCategory";
import {useState } from "react";


const RestaurentMenu = () =>{

  const [showIndex, setShowIndex] = useState(0);
    const { resId} = useParams();

      const resInfo = useRestaurentMenu(resId)
      
      const restaurent = dataObj.restaurants.find(
        (res) => res.info.id === resId
      )

      console.log(restaurent);

    

      if (resInfo === null) return (<Shimmer/>);


    return  (
        <div className="max-w-6xl mx-auto px-6 mt-10">
            <div className=" items-start gap-8 m-20 text-center">
            <img className="h-60 w-100 mx-70 object-cover" src={ CDN_URL + restaurent.info.cloudinaryImageId}></img>
            <div className="m-10 bg-white overflow-hidden">
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

    </div>
        </div>
        <div className="-auto gap-4 bg-green-50 px-4 py-2 m-20 rounded-lg">
       {restaurent.info.menu.map((category ,index) => 
// Controlled Component 
       (
        <RestaurentCategory 
        key={category.categoryId} 
        data={category}
        showItems={index === showIndex ? true : false }
        setShowIndex={() =>  setShowIndex(index)}/>
       )

    )}
    </div>
        </div>
    )
}

export default RestaurentMenu;