import React from "react";
import "./LogIn.css";


function LogIn() {

  return (
    <div className="top ">
      <h2 className="mt-1 mb-5">LogIn to continue</h2>
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-4">

          <form className="form" >
            <div className="form-outline mb-4">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                id="email"


              />

            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"

              />


            </div>
            <div className="row d-flex gap-2">
              <button className="close-btn btn btn-block mb-4 col-lg-12" type="submit">submit</button>
              <p className="text-center"> OR</p>
              <button className=" btn btn-danger btn-lg col-lg-12">continue with Google</button>
              <button className="btn btn-primary btn-lg col-lg-12">continue with Facebook</button>
              <button className="btn btn-danger btn-lg col-lg-12">continue with Gmail</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}

export default LogIn;