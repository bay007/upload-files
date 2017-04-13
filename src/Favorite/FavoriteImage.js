import React from "react";

const FavoriteImage = ({ photo }) => (
  <div className="pt-card pt-elevation-3">
  <img src={photo.url} alt="FavoriteImage" />
  </div>
);
export default FavoriteImage;
