import { CategoryTypes } from "../../types";
import DirectoryItem from "../directory-item/directory-item.component";
import "./category-list.styles.scss";

interface CategoryListProps {
  categories: CategoryTypes[];
}
const CategoryList = (props: CategoryListProps) => {
  const { categories } = props;
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default CategoryList;
