import React from "react";

const AdminLogin = (props) => {
  return (
    <div className="container">
      <div className="row" dir="ltr">
        <div className="col-3"></div>
        <div className="col-6 mt-5 align-items-center">
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                Email address
              </label>
              <input type="email" id="form2Example1" class="form-control" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Password
              </label>
              <input type="password" id="form2Example2" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-4">
              Sign in
            </button>
            <div class="row">
              <div class="col d-flex">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example34"
                    checked
                  />
                  <label class="form-check-label" for="form2Example34">
                    Remember me
                  </label>
                </div>
              </div>
              <div class="col">
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
