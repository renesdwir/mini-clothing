import { CartItemTypes } from "../../types";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }: { item: CartItemTypes }) => {
  const { id, imageUrl, name, price, quantity } = item;
  const { changeQuantity, removeCartItem } = useContext(CartContext);
  const removeHandler = () => removeCartItem(id);
  const decrementHandler = () => changeQuantity(id, "dec");
  const incrementHandler = () => changeQuantity(id, "inc");
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
