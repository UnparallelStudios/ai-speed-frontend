import { useState } from "react";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import video from "../LoginAssets/video.mp4";
// import logo from "../LoginAssets/L1.jpg";

// import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const urlRegister = "https://8671-34-125-164-104.ngrok-free.app/signup";

  const validateRegister = () => {
    axios
      .post(urlRegister, {
        uid: "u2108029",
        name: "bros",
        username: "bros",
        email: email,
        phone_no: "12345678891",
        password: password,
      })
      .then(function (response) {
        if (response.status == 200) {
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      })
      .catch(function (error) {
        console.log(error);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Create and sell Extraordindary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="header div">
            {/* <img src={logo} alt="Logo Image" /> */}
            <div className="img-placeholder"></div>
            <h3> Let us know you!</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  id="username"
                  placeholder="Enter username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button
              onClick={validateRegister}
              type="button"
              className="btn flex"
            >
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your Password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
