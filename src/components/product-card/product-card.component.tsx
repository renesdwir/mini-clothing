import { CartItemTypes, ProductTypes } from "../../types";
import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const { imageUrl, name, price } = product;
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const cartItem: CartItemTypes = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: 0,
    };
    addToCart(cartItem);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};
export default ProductCard;
