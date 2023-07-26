import ReactDOM from "react-dom/client";

const header = (
  <h1 id="title" key="h1">
    Welcome to react element
  </h1>
);

const Title = () => (
  <h1 id="title" key="h1">
    Welcome to Title
  </h1>
);

// Functional component => Naming should be start with capital letter => Its not mandatory but naming convesion
const HeaaderComponent = () => {
  return (
    <div>
      {header} {/* using react element inside the component */}
      <Title /> {/* using react component inside component => composing component*/}
      {Title()} {/*also execute component as a function at the end functional compoent is function*/}
      <h1>Namaste React Functional Fomponent</h1>
      <h2>this is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaaderComponent />);
