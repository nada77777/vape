import { string } from "prop-types";

import S from "./Item__image__container.module.scss";

const ItemImageContainer = ({ imageUrl, description }) => {
  return <img src={imageUrl} alt={description} />;
};

export default ItemImageContainer;

ItemImageContainer.propTypes = {
  imageUrl: string.isRequired,
  description: string.isRequired,
};
