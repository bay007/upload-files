import React, { Component } from "react";
import "./App.css";
import Favorite from "./Favorite";
var photos = [
  {
    id: 1,
    url: "http://www.ofifacil.com/ideas-ejemplos/varios/menu-carta-restaurante-design-diseno-maquetacion-009.jpg",
    isEditable: true,
    menuSections: [
      {
        name: "Breakfast",
        menuItems: [
          {
            name: "Pancakes",
            rect: { x: 100, y: 20, width: 200, height: 20 }
          },
          {
            name: "Waffles",
            rect: { x: 100, y: 40, width: 200, height: 20 }
          }
        ]
      },
      { name: "Lunch", menuItems: [] },
      { name: "Dinner", menuItems: [] }
    ]
  },
  {
    id: 2,
    url: "http://www.ofifacil.com/ideas-ejemplos/varios/im33g18.jpg",
    isEditable: false,
    menuSections: [
      {
        name: "Lunch",
        menuItems: [
          {
            name: "Pancakes",
            rect: { x: 100, y: 20, width: 200, height: 20 }
          }
        ]
      },
      {
        name: "Dinner",
        menuItems: []
      },
      {
        name: "Soups",
        menuItems: []
      }
    ]
  }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: []
    };
  }

  render() {
    return (
      <div className="App">
        <Header numberPage={2} />
        <Favorite photos={photos} />
        <PhotoEditor photos={photos} uploadPhoto={<UploadPhoto />} />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Página {this.props.numberPage || "-"}</h1>
      </div>
    );
  }
}

function PhotoEditor({ uploadPhoto, photos }) {
  const items = photos.map(x => {
    return (
      <div key={x.id}>
        <ImageOptions id={x.id} />
        <PhotoItem src={x.url} />
      </div>
    );
  });
  return (
    <div className="photoEditor">
      {items}
      {uploadPhoto}
    </div>
  );
}

function PhotoItem({ src }) {
  return (
    <div>

      <img src={src} />
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
