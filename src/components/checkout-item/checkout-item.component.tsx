import { CartItemTypes } from "../../types";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ item }: { item: CartItemTypes }) => {
  const { id, imageUrl, name, price, quantity } = item;
  const { changeQuantity, removeCartItem } = useContext(CartContext);
  const removeHandler = () => removeCartItem(id);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity} </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
      {/* <h2>{name}</h2>
      <span>{quantity}</span>
      <br />
      <span onClick={() => changeQuantity(id, "dec")}>Decrement</span>
      <br />
      <span onClick={() => changeQuantity(id, "inc")}>Increment</span> */}
    </div>
  );
};

export default CheckoutItem;
