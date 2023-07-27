import { CartItemTypes } from "../../types";
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
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsData } from "../../store/cart/cart.selector";
import { changeQuantity, removeCartItem } from "../../store/cart/cart.action";

const CheckoutItem = ({ item }: { item: CartItemTypes }) => {
  const dispatch = useDispatch();
  const { id, imageUrl, name, price, quantity } = item;
  const cartItems = useSelector(getCartItemsData);
  const removeHandler = () => dispatch(removeCartItem(cartItems, id));
  const decrementHandler = () => dispatch(changeQuantity(cartItems, id, "dec"));
  const incrementHandler = () => dispatch(changeQuantity(cartItems, id, "inc"));
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
