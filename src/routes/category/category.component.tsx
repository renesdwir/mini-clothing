import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { Fragment, useContext, useEffect, useState } from "react";
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
    <Fragment>
      <CategoryTitle>{category?.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CategoryContainer>
    </Fragment>
  );
};
export default Category;
