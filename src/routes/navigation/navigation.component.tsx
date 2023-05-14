import { Link, Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrwnLogo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-item" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
