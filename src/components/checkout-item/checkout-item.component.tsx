import { CartItemTypes } from "../../types";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  RemoveButton,
  StyledArrow,
  StyledName,
  StyledPrice,
  StyledQuantity,
  StyledValue,
} from "./checkout-item.styles";

const CheckoutItem = ({ item }: { item: CartItemTypes }) => {
  const { id, imageUrl, name, price, quantity } = item;
  const { changeQuantity, removeCartItem } = useContext(CartContext);
  const removeHandler = () => removeCartItem(id);
  const decrementHandler = () => changeQuantity(id, "dec");
  const incrementHandler = () => changeQuantity(id, "inc");
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <StyledName>{name}</StyledName>
      <StyledQuantity>
        <StyledArrow onClick={decrementHandler}>&#10094;</StyledArrow>
        <StyledValue>{quantity}</StyledValue>
        <StyledArrow onClick={incrementHandler}>&#10095;</StyledArrow>
      </StyledQuantity>
      <StyledPrice>{price}</StyledPrice>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
