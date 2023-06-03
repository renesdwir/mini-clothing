import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      Shop Data
      {products.map(({ name, id }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};
export default Shop;
