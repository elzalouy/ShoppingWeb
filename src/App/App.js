import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import store from "../store/index";
function App(props) {
  return (
    <Provider store={store}>
      <Navbar {...props} />
      <BrowserRouter>
        <Switch>{routes.map((item) => item.Route)}</Switch>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
