import { star } from "../../assests/images";

const RestaurantDetails = ({resDetails = {}}) => {
    const {name = '', cuisines = [], city = '', avgRatingString = '', costForTwoMessage = '', totalRatingsString = ''} = resDetails;

    return (
        <div className="res-details">
            <p style={{color: 'black', fontWeight: '800'}}>{name}</p>
            <div style={{display: "flex", flexDirection: 'row', alignItems: 'center'}}>
                <img src={star} height="20px" width="20px"/>
                <p style={{color: 'black', fontWeight: '600'}}>{avgRatingString} ({totalRatingsString})</p>
                <p style={{marginLeft: 10}}>{costForTwoMessage}</p>
            </div>
            <p style={{color: 'red'}}>{cuisines.join(', ')}</p>
            <p style={{color: 'black', fontWeight: '600'}}>{city}</p>
        </div>
    )
}

export default RestaurantDetails;