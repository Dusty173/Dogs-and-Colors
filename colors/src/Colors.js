import React from "react";
import { Link } from "react-router-dom";

function Colors({ colors }) {
  return (
    <>
      <h1>Colors!</h1>
      <h3>
        <Link to="/add-color">Add a new color!</Link>
      </h3>

      <ul>
        {Object.keys(colors).map((colorName) => (
          <li key={colorName}>
            <Link to={`/color/${colorName}`}>{colorName}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Colors;
