const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "c1" }, [
    React.createElement("h1", { key: "c1h1" }, "I am a h1 tag"),
    React.createElement("h2", { key: "c1h2" }, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child", key: "c2" }, [
    React.createElement("h1", { key: "c2h1" }, "I am a h1 tag"),
    React.createElement("h2", { key: "c2h2" }, "I am a h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);