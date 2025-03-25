import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor : "#f0f0f0",
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cloudinaryImageId,cuisines,avgRating,costForTwo} = resData ?.info;
    return (
        <div className="res-card m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-400">
            <img className="res-logo rounded-xl" alt="res-logo" src={ CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;