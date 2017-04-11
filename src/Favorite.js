import React from "react";
import FavoriteImage from "./FavoriteImage";
import FavoriteDetail from "./FavoriteDetail";

export default ({ photos }) => {
  const photo = photos.find(photo => photo.isEditable);
  return (
    <div className="favorite">
      <FavoriteImage photo={photo} />
      <FavoriteDetail photo={photo} />
    </div>
  );
};
