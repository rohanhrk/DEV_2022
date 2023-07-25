// ===========================================
//   <div id="root">
//     <div id="container">
//       <h1>Heading 1</h1>
//       <h2>Heading 2</h2>a
//     </div>
//   </div>;
// ===========================================

/* 
      React.createElement(
        html tag, 
        html attribute object (props), 
        children inside html tag) 
      */

// <h1 id = "heading 1">Heading 1</h1>
const heading1 = React.createElement(
  "h1",
  {
    id: "heading 1",
  },
  "Heading 1"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading 2",
  },
  "Heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
// render -> modify react dom -> override container with text "Not rendered!"
root.render(container);
