
const RestaurantCard = ({ props }) => {
  const { resName, cuisine, rating, eta } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/26/78517964-20dc-4e37-92ce-8990deb14ab6_898041.jpg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{eta} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
