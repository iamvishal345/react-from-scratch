import React from "react";
import ReactDOM from "react-dom/client";
import image2 from "./image2.png";
import "./styles.css";

const element = (
  <>
    <h1>Hello World</h1>
    <img src={image2} />
  </>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
