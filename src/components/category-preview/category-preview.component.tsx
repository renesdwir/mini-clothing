import { CategoryMapTypes } from "../../types";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";
interface CategoryPreviewProps {
  title: string;
  products: CategoryMapTypes[];
}
const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};
export default CategoryPreview;
