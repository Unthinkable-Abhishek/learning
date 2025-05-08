import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=360"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact-us'}>Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
