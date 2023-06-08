import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      Shop Data
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Shop;
