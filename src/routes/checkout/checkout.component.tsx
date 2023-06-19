import "./checkout.styles.scss";

import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
import { CartItemTypes } from "../../types";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item: CartItemTypes) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
