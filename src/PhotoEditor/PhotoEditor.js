import React from "react";

const PhotoEditor = ({ photos }) => {
  const items = photos.map(photo => {
    return (
      <div key={photo.id}>

        <PhotoItem photo={photo} />
      </div>
    );
  });
  return (
    <div className="photoEditor">
      {items}
      {<UploadPhoto />}
    </div>
  );
};

export default PhotoEditor;

function ImageOptions({ id }) {
  function onclickUploadPhoto(a) {
    alert(a);
  }

  return (
    <div onClick={onclickUploadPhoto.bind(this, id)}>
      Image Options
    </div>
  );
}

function PhotoItem({ photo }) {
  return (
    <div>
      <ImageOptions id={photo.id} />
      <img src={photo.url} />
    </div>
  );
}

function UploadPhoto() {
  function onclickUploadPhoto() {
    alert();
  }

  return (
    <div className="uploadPhoto" onClick={onclickUploadPhoto}>
      <input type="file" />
      Seleccione aqui su archivo
    </div>
  );
}
