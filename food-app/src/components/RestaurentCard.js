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
        <div className="res-card" style={{backgroundColor: "yellow "}}>
            <img className="food-img" src={ CDN_URL + cloudinaryImageId} alt="Mh"></img>
           <span> <h3>{name}</h3>   
            <h3>{costForTwo}</h3>
            <h3>{avgRatingString}</h3>
            <h3>{cuisines.join(",")}</h3></span>    
        </div>
    )
}

export default RestaurentCard;