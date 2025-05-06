import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            console.log(data);
            console.log(json);
            
            setRestaurantData( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setFilteredData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

        } catch (error) {
            console.log("Error in Body >>", error);
        }
    }

    function filterRestaurantList() {
        let filteredList = restaurantData.filter((item)=> item?.info?.avgRating >= 4);
        setFilteredData(filteredList);
    }

    function handleSearchBtn(){
        let searchTextInLower = searchValue.toLowerCase();

        const filteredList = restaurantData.filter((item)=> item?.info?.name.toLowerCase().includes(searchTextInLower));
        if(filteredList.length == 0){
            setFilteredData(restaurantData);
            
        }else{
            setFilteredData(filteredList);
        }
    }

    return filteredData.length === 0 ? <Shimmer /> : (
        <div>
            <div className="filter"> 
                <div>
                    <input type="text" value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}} placeholder="Search for Restaurant"/>
                    <button onClick={handleSearchBtn}>Search</button>
                </div>
                <button className="filter-btn" onClick={filterRestaurantList}>Top Rated Restaurant's</button>
            </div>
            <div className="res-container">
                {filteredData.map((restaurant, index) => {
                    return (
                        <RestaurantCard props={restaurant} key={index}/>
                    )})
                }
            </div>
        </div>
    )
}

export default Body;