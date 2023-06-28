import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span>Your Cart Is Empty</span>
        )}
      </div>
      <Button onClick={goToCheckout} buttonType="base">
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
