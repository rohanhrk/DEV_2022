import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="title" key="h1">
    React JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
