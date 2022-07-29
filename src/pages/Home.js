import React, { useContext, } from "react";
import Login from "../components/Login";


const Home = () => {
  
  

  return (
    <>
      <section className="home-total">
        <section className="login-wrapper">
          <h2>Login</h2>
          <Login />
        </section>
      </section>
    </>
  );
};

export default Home;
