import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = <h1>Namaste React!! 🚀</h1>;

console.log(jsxHeading);

const HeadingComponent = () => (
  <div id="heading">
    {jsxHeading}
    <h1>Namaste Functional Component</h1>;
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
