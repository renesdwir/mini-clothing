import { CartItemTypes } from "../../types";
import {
  CartItemContainer,
  ItemDetails,
  StyledName,
  StyledPrice,
} from "./cart-item.styles";

export const CartItem = ({ cartItem }: { cartItem: CartItemTypes }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <StyledName>{name}</StyledName>
        <StyledPrice>
          {quantity} x ${price}
        </StyledPrice>
      </ItemDetails>
    </CartItemContainer>
  );
};
