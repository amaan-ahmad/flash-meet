import React from "react";
import { render } from "react-dom";
import App from "./src/App";
import User from "./src/context/user";

render(
  <User>
    <App />
  </User>,
  document.getElementById("root")
);
