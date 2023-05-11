import { CategoryTypes } from "../../types";
import CategoryItem from "../category-item/category-item.component";
import "./category-list.styles.scss";

interface CategoryListProps {
  categories: CategoryTypes[];
}
const CategoryList = (props: CategoryListProps) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategoryList;
