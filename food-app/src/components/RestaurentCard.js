import { CDN_URL } from "../utils/constants"

const RestaurentCard = (props) =>{
    const { resData } = props;
    const {
        cloudinaryImageId,
        name, 
        costForTwo,
        avgRatingString,
        cuisines
    } = resData?.info;

    return(
        <div className="relative w-64 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
            <img className="h-40 w-full object-cover" src={ CDN_URL + cloudinaryImageId} alt="Mh"></img>
           <span> <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>   
            <h3 className="text-gray-600">{costForTwo}</h3>
            <h3 className="rounded-md bg-green-100 px-2 py-1 font-semibold text-green-700"> ⭐ {avgRatingString}</h3>
            <h3 className="text-sm text-gray-500 line-clamp-2">{cuisines.join(",")}</h3></span>    
        </div>
    )
}

// Higher order comp

//input RestaurentCard
//output Enhanced RestaurentCard = Promoted RestaurentCard

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="promoted-card">
        <label className="absolute bg-black text-white mb-40">Promoted</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;