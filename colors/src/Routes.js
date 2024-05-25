import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddColor from "./AddColor";
import Color from "./Color";
import Colors from "./Colors";

const INITIAL_COLOR_STATE = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

function Routes() {
  const [colors, setColors] = useState(INITIAL_COLOR_STATE);

  function addColor(colorObj) {
    setColors((prevColors) => ({ ...prevColors, colorObj }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Colors colors={colors} />
        </Route>

        <Route path="/add-color">
          <AddColor submit={addColor} />
        </Route>

        <Route path="/color/:color/">
          <Color color={colors} />
        </Route>

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
