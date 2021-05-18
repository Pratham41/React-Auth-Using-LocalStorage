import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logedin, setLogedin] = useState(
    localStorage.getItem("loggedin") ? true : false
  );

  const history = useHistory();

  const loginUser = (event) => {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users"));
    var success = false;

    for (var user of users) {
      if (user.username === username && user.password === password) {
        success = true;
        setLogedin(true);
      }
    }

    if (success) {
      // swal("Login Successful !", "you have logged in ", "success");

      localStorage.setItem("loggedin", "loggedin");
      history.push("/dashboard");
      // window.location.reload(true);
    } else {
      swal("Login Failed !", "please enter valid credentials", "error");
    }

    setUsername("");
    setPassword("");
  };

  const userLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("loggedin");
    setLogedin(false);
    history.push("/");
    // window.location.reload(true);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row  nav">
          <div className="col-md-6">
            <h1>FaceBook</h1>
          </div>
          <div className="col-md-6">
            {(() => {
              if (logedin) {
                return (
                  <div>
                    <button onClick={userLogout}>LOG OUT</button>
                  </div>
                );
              } else {
                return (
                  <div>
                    <input
                      type="text"
                      placeholder="username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button onClick={loginUser}>Log in</button>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
