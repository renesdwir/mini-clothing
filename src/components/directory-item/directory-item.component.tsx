import { CategoryTypes } from "../../types";
import "./directory-item.styles.scss";

interface DirectoryItemProps {
  category: CategoryTypes;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default DirectoryItem;
