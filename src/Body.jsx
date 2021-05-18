import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Body.css";
import swal from "sweetalert";
function Body() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var user = {
      name: name,
      username: username,
      password: password,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    swal(
      "Registration Successful !",
      "You have successfully registered.",
      "success"
    );
    setName("");
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-8">
            <img
              src="https://www.disruptivestatic.com/wp-content/uploads/2019/03/fb-ppc-marketing-strategy-1.jpg"
              //   src="https://www.techfunnel.com/wp-content/uploads/2019/09/Top-Content-Marketing-Techniques-When-Creating-Infographics.png"
              alt=""
            />
          </div>
          <div className="col-md-3 mt-4">
            <h1 className="text-primary mb-4">Register</h1>
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="username"
                className="form-control"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="submit"
                className="btn btn-primary"
                value="SIGN UP"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
