import React from "react";
import FavoriteImage from "./FavoriteImage";
import FavoriteDetail from "./FavoriteDetail";

const Favorite = ({ photos }) => {
  const photo = photos.find(photo => photo.isEditable);
  return (
    <div className="favorite">
      <FavoriteImage photo={photo} />
      <FavoriteDetail photo={photo} />
    </div>
  );
};
export default Favorite;
