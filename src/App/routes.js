import { Route, Redirect } from "react-router-dom";
import { authed } from "../httpServices/user";
import AdminLogin from "../pages/AdminLogin";
import Categories from "../pages/Categories";
import Product from "../pages/Product";
import Products from "../pages/Products";
const routes = [
  {
    route: "/login",
    Route: (
      <Route
        path="/login"
        key="login"
        exact
        render={(props) => {
          if (!authed()) return <AdminLogin {...props} />;
        }}
      />
    ),
  },
  {
    route: "/Categories",
    Route: (
      <Route
        path="/categories"
        key="cats"
        render={(props) => {
          if (authed()) return <Categories {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
    ),
  },
  {
    route: "/products",
    Route: (
      <Route
        path="/products"
        key="prods"
        render={(props) => {
          if (authed()) return <Products {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
    ),
  },
  {
    route: "/product/:id",
    Route: (
      <Route
        path="/product/:id"
        key="prod"
        render={(props) => {
          if (authed()) return <Product {...props} />;
          else return <Redirect to="/login" />;
        }}
      />
    ),
  },
];
export default routes;
