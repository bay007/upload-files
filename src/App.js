import React, { Component } from "react";
import "./App.css";
import Favorite from "./Favorite/Favorite";
import PhotoEditor from "./PhotoEditor/PhotoEditor";
var photos = [
  {
    id: 1,
    url: "http://www.ofifacil.com/ideas-ejemplos/varios/menu-carta-restaurante-design-diseno-maquetacion-009.jpg",
    isEditable: false,
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
    url: "http://www.ghk.mx/imagenes/hkc-mariscos.jpg",
    isEditable: true,
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
        <PhotoEditor photos={photos} />
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
