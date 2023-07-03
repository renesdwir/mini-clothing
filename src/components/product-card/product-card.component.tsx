import { CartItemTypes, CategoryMapTypes } from "../../types";
import Button from "../button/button.component";
import {
  ProductCardContainer,
  Footer,
  StyledName,
  StyledPrice,
} from "./product-card.styles";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }: { product: CategoryMapTypes }) => {
  const { imageUrl, name, price } = product;
  const { addToCart, setIsCartOpen } = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem: CartItemTypes = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 0,
    };
    addToCart(cartItem);
    setIsCartOpen(true);
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
