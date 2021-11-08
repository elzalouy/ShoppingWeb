import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/user";
import { login as httpLogin } from "../httpServices/user";
const AdminLogin = (props) => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.User);
  const onHandleChange = (e) => {
    dispatch(
      UserActions.onChangeLogin([
        { element: "error", value: "" },
        { element: e.target.name, value: e.target.value },
      ])
    );
  };
  const onHandleSubmit = async () => {
    const result = await httpLogin({
      email: login.email,
      password: login.password,
    });
    if (result.error)
      dispatch(
        UserActions.onChangeLogin([
          { element: "error", value: result.error.message },
        ])
      );
    else window.location.reload();
  };
  return (
    <div className="container">
      <div className="row" dir="ltr">
        <div className="col-3"></div>
        <div className="col-6 mt-5 align-items-center">
          <form>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
              <input
                name="email"
                value={login.email}
                onChange={onHandleChange}
                type="email"
                id="form2Example1"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
              <input
                name="password"
                value={login.password}
                onChange={onHandleChange}
                type="password"
                id="form2Example2"
                className="form-control"
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" style={{ color: "red" }}>
                {login?.error}
              </label>
            </div>

            <button
              type="button"
              onClick={() => onHandleSubmit()}
              className="btn btn-primary w-100 mb-4"
            >
              Sign in
            </button>
            <div className="row">
              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
