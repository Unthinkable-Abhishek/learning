import { useEffect, useState } from "react";
import { MENU_API } from "../constant";

const useRestaurantFetch = (resId = '') => {
    const [ restaurantMenuData, setRestaurantMenuData] = useState([]);

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

    return restaurantMenuData;
}

export default useRestaurantFetch;