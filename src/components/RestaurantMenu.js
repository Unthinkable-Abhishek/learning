import { useState } from "react";
import { chevron, dropdown, greenIcon, redIcon } from "../../assests/images";
import Shimmer from "./Shimmer";
import { IMG_URL } from "../utils/constant";

const RestaurantMenuItem = ({showItems = false, catgeoryItem = []}) => {
    const lengthOfItems = catgeoryItem.length;

    return (showItems == false) ? null : (
        <div style={{margin: '20px 40px'}}>
            {catgeoryItem.map((item, index) => {
                const {id = '', name = '', price = 0, isVeg = 0, inStock = 1, defaultPrice = 0, description = '', imageId = ''} = item?.card?.info || {};

                return (inStock == 0) ? null : (
                    <div key={id} style={{borderBottom: index!=lengthOfItems-1 ? '1px solid grey' : '', marginBottom: '5px', paddingBottom: '10px', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', padding: '0px 20px'}}>
                        <div style={{flexDirection: 'column'}}>
                            <img src={isVeg==1 ? greenIcon : redIcon} height="10px" width="10px" style={{marginLeft: '5px'}}/>
                            <h5>{name}</h5>
                            <h5>₹ {price/100 || defaultPrice/100}</h5>
                            <p style={{margin: 0, fontSize: '12px', color: 'black'}}>{description}</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', margin: '10px',}}>
                            <img src={IMG_URL + imageId} width="120px" height="120px" alt={name}/>
                            <button style={{backgroundColor: 'white', border: '1px solid black', padding: '5px'}}>Add</button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

const RestaurantMenuCategory = ({categoryItem = {}}) => {
    const {title = '', categoryId = '', itemCards = []} = categoryItem || {};
    const [showItems, setShowItems] = useState(true);

    const handleCategoryClick = (e) => {
        setShowItems(!showItems);
    }

    return (
        <div key={categoryId || index} style={{display: 'flex', flexDirection: 'column', cursor: 'pointer', marginBottom: '20px'}}>
            <div style={{display: 'flex', gap: '5px'}} onClick={handleCategoryClick}>
                <p style={{fontWeight: 'bolder', color: 'red'}}>{title}</p>
                <p style={{fontWeight: 'bolder', color: 'red'}}>({title.length})</p>
                <img src={showItems ? chevron : dropdown} height="22px" width="22px"/>
            </div>
            <RestaurantMenuItem showItems={showItems} catgeoryItem= {itemCards}/>
        </div>
    )
}

const RestaurantMenu = ({resMenu = []}) => {

    const categoriesArray = resMenu && resMenu.length>0 && resMenu.filter((item) => {
        const categoryType = item?.card?.card['@type'];
        return categoryType == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    }) || [];

    return (categoriesArray.length == 0) ? <Shimmer /> : (
        <div>
            {categoriesArray.map((item, index) => {
                return <RestaurantMenuCategory categoryItem={item?.card?.card} key={index}/>
            })}
        </div>
        
    )
}


export default RestaurantMenu;