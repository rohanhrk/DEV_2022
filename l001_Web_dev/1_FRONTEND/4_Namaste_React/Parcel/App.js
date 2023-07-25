import React from "react";
import ReactDOM  from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "world"
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
// render -> modify react dom -> override container with text "Not rendered!"
root.render(container);
