import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
 
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };  

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>Looks like you are offline. Please check your internet connection.</h1>
    }

    return listOfRestaurants.length === 0 ? (<Shimmer/>) :(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e)=> {setSearchText(e.target.value)}}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
                        setListOfRestaurants(filteredList);
                        console.log(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {
                    filteredRestaurant.map(restaurant => <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard resData = {restaurant}/></Link>)
                }
            </div>
        </div>
    )
}

export default Body; 