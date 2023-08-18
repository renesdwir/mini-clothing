import { Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {
  LogoContainer,
  NavLink,
  NavLinks,
  NavigationContainer,
} from "./navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/user/user.selector";
import { getIsCartOpenData } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const isCartOpen = useSelector(getIsCartOpenData);
  const signOutHandler = () => {
    dispatch(signOutStart());
  };
  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} alt="Logo" className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutHandler}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
