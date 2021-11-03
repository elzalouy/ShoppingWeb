import { Fragment } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Navbar from "../components/Navbar";
function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Switch>{routes.map((item) => item.Route)}</Switch>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
