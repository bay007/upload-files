import React from "react";

export default ({ photo }) => {
  const menuSections = [];

  photo.menuSections.map(menuSection => {
    menuSections.push(menuSection.name, ",");
  });

  const goToMenuEditor = (
    <span
      className="Rounded"
      onClick={() => {
        alert("Hacia Menu editor");
      }}
    >
      Edit
    </span>
  );

  const numMenuItems = photo.menuSections.reduce(
    (menuSection, num) => {
      return menuSection.menuItems + num;
    },
    0
  );

  return (
    <div>

      <div><p>Menu Sections: {menuSections}</p></div>
      <p>
        {goToMenuEditor}
        {" "}
        Menu Items: Cuenta con
        {" "}
        <strong>{photo.menuSections.length}</strong>
        {numMenuItems === 1 ? " un" : ""}
        {" "}
        elemento
        {numMenuItems === 1 ? "" : "s"}
      </p>
    </div>
  );
};
