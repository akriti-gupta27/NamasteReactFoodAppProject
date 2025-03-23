import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    console.log(resId)
;
    useEffect(()=> {
        fetchMenu();
    },[]);

const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
}

if (resInfo === null){
     return <Shimmer/>;
}

const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(', ')}</h2>
            <h2>{costForTwoMessage}</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.defaultPrice / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;