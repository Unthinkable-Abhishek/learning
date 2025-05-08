import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantPage = () => {
    const [ restaurantMenuData, setRestaurantMenuData ] = useState([]);
    const { resId = '' } = useParams();

    useEffect(() => {
        fetchResData();
    }, []);

    const fetchResData = async () => {
        try {
            const data = await fetch(MENU_API + resId);
            const json = await data.json();

            setRestaurantMenuData(json?.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return  (restaurantMenuData.length == 0) ? <Shimmer /> : (
        <div className="res-menu">
            <RestaurantDetails resDetails= {restaurantMenuData?.cards[2]?.card?.card?.info}/>
            <RestaurantMenu resMenu= {restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
        </div>
    )
}

export default RestaurantPage;