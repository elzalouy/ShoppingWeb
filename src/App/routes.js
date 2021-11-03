import { Route, Redirect } from "react-router-dom";
import AdminLogin from "../pages/AdminLogin";
import Categories from "../pages/Categories";
import Products from "../pages/Products";
const routes = [
  {
    route: "/login",
    Route: <Route path="/login" key="login" exact component={AdminLogin} />,
  },
  {
    route: "/Categories",
    Route: <Route path="/categories" key="cats" component={Categories} />,
  },
  {
    route: "/products",
    Route: <Route path="/products" key="prods" component={Products} />,
  },
  {
    route: "/redirect",
    Route: <Redirect exact to="/login" />,
  },
];
export default routes;
