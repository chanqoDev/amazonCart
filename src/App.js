import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const title = { hello: ["my", "nigga", "!"] };

  return (
    <div className="App">
      <Header itemTitle={title.hello[2]} />
    </div>
  );
}

export default App;
