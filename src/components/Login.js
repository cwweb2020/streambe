import React, { useContext, useState } from "react";
import { AuthContext } from "../context/LoginProvider";
import {config} from '../constant/index'


const Login = () => {
  const authConsumer = useContext(AuthContext);
  const { handleLogin, getUsername } = authConsumer;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
      if(username !== config.USER_NAME || password !== config.USER_PASSWORD){
        alert('Usuario o contraseña incorrectos')
        return
      }
     handleLogin(user)
     e.target.reset();
  }

  return (
    <>
      <div className="login-total">
        <form className="form-label" onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleChange}
            className="form-control mb-4"
            required
          />
          <p>Password</p>
          <input
            type="password"
            name="password"
            placeholder="paassword"
            onChange={handleChange}
            className="form-control mb-3"
            required
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
