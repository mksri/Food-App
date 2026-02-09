import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurentCategory = ({data , showItems , setShowIndex}) => {

    //const [ showItems, setShowItems ] = useState(false);
   // console.log("data",data)

    const handleClick = () =>{
        setShowItems(!showItems);
        console.log("handleclick")
    }

    return(
        <div>
            {/* Accordian Header */}

            <div className="w-full bg-green-50 shadow-2xl p-4 cursor-pointer" onClick={setShowIndex}>
                <span>  
                    {data.categoryName}                 
                </span>
                 <span>
                   ⬇️
                </span>
              {showItems &&  <ItemsList items={data.items}/> }
            </div>
        </div>
    )

}

export default RestaurentCategory;