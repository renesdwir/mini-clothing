import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  StyledTotal,
} from "./checkout.styles";

import { CartItemTypes } from "../../types";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { getCartItemsData, getCartTotal } from "../../store/cart/cart.selector";

const Checkout = () => {
  const cartItems = useSelector(getCartItemsData);
  const cartTotal = useSelector(getCartTotal);

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
