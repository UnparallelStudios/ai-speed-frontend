import React from "react";
import "../../App.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";

import video from "../LoginAssets/video.mp4";
import logo from "../LoginAssets/L1.jpg";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill, BsPass } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setLoginUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const urlLogin = "https://32c4-34-16-150-250.ngrok-free.app/login";

  const validateLogin = () => {
    const response = axios
      .post(urlLogin, {
        username: loginUsername,
        password: loginPassword,
      })
      .then(function (response) {
        if (response.status == 200) {
          setLoginStatus("Success");
          localStorage.setItem("username", loginUsername);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        } else {
          setLoginStatus("Failed");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    // if (loginUsername == "prathik" && loginPassword == "prejith") {
    //   setLoginStatus("Success");
    //   localStorage.setItem("username", loginUsername);
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 2000);
    // } else {
    //   setLoginStatus("Failed");
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 1000);
    // }
  };

  const LoginStatusBar = ({ status }) => {
    if (status == "Success") {
      return <span className="showMessage--success">Success</span>;
    } else if (status == "Failed") {
      return <span className="showMessage--failed">Failed</span>;
    } else {
      return <span className="showMessage">Please Log in!</span>;
    }
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Your Gateway to Smarter Surveillance</h2>
            <p>Elevate Your Surveillance Experience!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="header div">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>
          <form action="" className="form grid">
            {/* login status bar goes here */}
            <LoginStatusBar status={loginStatus} />
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter username"
                  onChange={handleChangeUsername}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={handleChangePassword}
                />
              </div>
            </div>

            <button type="button" className="btn flex" onClick={validateLogin}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <a href="/dashboard">Dashboard</a>

            <span className="forgotPassword">
              Forgot your Password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
