import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const techItems = ["macBook", "ipods", "speakerbox"];

  return (
    <div className="App">
      <Header tech={techItems} bob={["items", "items2"]} />
    </div>
  );
}

export default App;
