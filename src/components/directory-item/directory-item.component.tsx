import { useNavigate } from "react-router-dom";
import { CategoryTypes } from "../../types";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

interface DirectoryItemProps {
  category: CategoryTypes;
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();
  const onClickHandler = () => navigate(`shop/${title}`);
  return (
    <DirectoryItemContainer onClick={onClickHandler}>
      <BackgroundImage imgUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
