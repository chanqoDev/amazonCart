import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import "./App.css";

function App() {
  const title = { pageHeader: ["AmazonCart"], title: ["Shopping Cart"] };

  return (
    <div className="App">
      <Header title={title.pageHeader} />
      <div className="App-main">
        <CartItems title={title.title} />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
