import React from "react";
import "./style.css";
import {Provider} from "react-redux"
import store from "./Redux/Store"
import UsersData from "./Components/UserData"
export default function App() {
  return (
    <Provider store={store}>
    <div>
     <UsersData/>
     
    </div>
    </Provider>
  );
}
