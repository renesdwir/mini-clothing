import { CartItemTypes, CategoryMapTypes } from "../../types";
import Button from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  StyledName,
  StyledPrice,
} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setIsCartOpen } from "../../store/cart/cart.action";
import { getCartItemsData } from "../../store/cart/cart.selector";

const ProductCard = ({ product }: { product: CategoryMapTypes }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price } = product;
  const cartItems = useSelector(getCartItemsData);

  const handleAddToCart = () => {
    const cartItem: CartItemTypes = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 0,
    };
    dispatch(addToCart(cartItems, cartItem));
    dispatch(setIsCartOpen(true));
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <StyledName>{name}</StyledName>
        <StyledPrice>{price}</StyledPrice>
      </Footer>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
