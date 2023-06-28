import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckout} buttonType="base">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
