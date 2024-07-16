// App.js
import React from "react";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Body from "./Components/Body";

function App() {
  return (
    <Provider store={appstore}>
      <Body />
    </Provider>
  );
}

export default App;
