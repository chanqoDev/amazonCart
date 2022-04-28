import React from "react";
import Header from "./Header";
import "./App.css";

function App() {
  const title = { pageHeader: ["AmazonCart"], title: ["Shopping Cart"] };

  return (
    <div className="App">
      <Header title={title.pageHeader} />
      <div className="App-main">
        <div className="CartItems">
          <h1>{title.title}</h1>
        </div>
        <div className="CartTotal"></div>
        {/* add Shopping cart Page title */}
        {/* add our CartItems, add imageItem component, title of the item, add stock availability Label, add ability to delete, add item price label*/}
        {/* add cart total component, add sum label, display totalsum,add button component to Procceed the checkout */}
      </div>
    </div>
  );
}

export default App;
