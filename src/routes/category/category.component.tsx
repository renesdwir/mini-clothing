import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import { CategoryMapTypes } from "../../types";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<CategoryMapTypes[]>();

  useEffect(() => {
    if (category) setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className="categoryy-container">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default Category;
