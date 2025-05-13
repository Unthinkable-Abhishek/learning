import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantMenu from "./RestaurantMenu";
import useRestaurantFetch from "../utils/CustomHooks/useRestaurantFetch";

const RestaurantPage = () => {
    const { resId = '' } = useParams();
    const restaurantMenuData = useRestaurantFetch(resId) || [];

    return  (restaurantMenuData.length == 0) ? <Shimmer /> : (
        <div className="res-menu">
            <RestaurantDetails resDetails= {restaurantMenuData?.cards[2]?.card?.card?.info}/>
            <RestaurantMenu resMenu= {restaurantMenuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards}/>
        </div>
    )
}

export default RestaurantPage;