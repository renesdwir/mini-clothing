import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  StyledTotal,
} from "./checkout.styles";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { CartItemTypes } from "../../types";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item: CartItemTypes) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <StyledTotal>Total: ${cartTotal}</StyledTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
