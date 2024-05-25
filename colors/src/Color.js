import React from "react";
import { Link, useParams, Redirect } from "react-router-dom";

function Color({ colors }) {
  const { color } = useParams();
  if (color) {
    let hex = colors[color];

    if (!hex) {
      <Redirect to="/"></Redirect>;
    }
  }

  return (
    <>
      <div className="Color" style={{ backgroundColor: hex }}>
        <h2>This is {color}</h2>
        <h3>Isn't it nice?</h3>
      </div>
      <div className="Returnbtn">
        <Link to="/">Go Back</Link>
      </div>
    </>
  );
}

export default Color;
