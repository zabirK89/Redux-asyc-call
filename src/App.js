import React from "react";
import "./style.css";
import {Provider} from "react-redux"
import store from "./Redux/Store"
export default function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
    </Provider>
  );
}
