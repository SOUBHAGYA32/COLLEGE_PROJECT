import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
//CSS
import "./Loginpage.css";

//Components
import Authleft from "../../components/Auth/Authleft";

function Loginpage() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  //Login Function
  function loginUser() {
    toast.success("Login Button Clicked");
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 leftcontainer">
          <Authleft />
        </div>
        <div className="col-md-8 rightcontainer">
          <Toaster position="top-right" reverseOrder={false} />
          <div className="formLogin">
            <div className="loginHead">
              <h1>Sign in into POS Application</h1>
            </div>
            <div className="socialSignin">
              <button className="btn googleSign">
                <Icon
                  className="googleIcon"
                  icon="flat-color-icons:google"
                  width={30}
                  height={30}
                />
                <span>Sign in with Google</span>
              </button>
              <button className="btn facebookSignin">
                <Icon
                  className="facebookIcon"
                  icon="logos:facebook"
                  width={30}
                  height={30}
                />
              </button>
            </div>
            <hr />
            <div className="inputSignin mt-5">
              <div className="form-group mb-2">
                <label htmlFor="UserId">User ID</label>
                <input
                  type="text"
                  placeholder="Enter your user Id.."
                  className="form-control"
                  required
                  value={userid}
                  onChange={(e) => {
                    setUserid(e.target.value);
                  }}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="UserId">Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password.."
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button className="btn loginBtn" type="submit" onClick={loginUser}>
                Sign in
              </button>
              <h4 className="not_account">
                Not an account?
                <Link className="signup__link" to="/register">
                  <b>Sign up</b>
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
