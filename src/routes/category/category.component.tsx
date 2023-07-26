import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.styles";
import { Fragment, useEffect, useState } from "react";
import { CategoryMapTypes } from "../../types";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { getCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoriesMap);
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
