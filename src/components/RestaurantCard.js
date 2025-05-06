import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ props }) => {
  const {info = {}} = props || {};
  const {name = '', cuisines = [], avgRating = 0, sla = {}, cloudinaryImageId = '', id='' } = info || {};

  const imgLink = IMG_URL + `${cloudinaryImageId}`;

  return (
    <div className="res-card" key={id}>
      <img
        className="res-logo"
        alt="res-logo"
        src={imgLink}
        style={{ width: '100%', objectFit: 'contain', height: '300px', borderRadius: '20px' }}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
