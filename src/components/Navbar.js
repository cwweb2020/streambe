import React, { useContext, useEffect } from "react";
import { BsPersonFill } from "react-icons/bs";
import { AuthContext } from "../context/LoginProvider";

const Navbar = () => {
  const authConsumer = useContext(AuthContext);
  const { userData, handleLogout, token } = authConsumer;

  useEffect(() => {
   //  
  }, [userData])

  return (
    <>
      <section className="header-total">
        <div className="header-wrapper">
        {
          !token ? <h3>ingresar</h3> : <h3>Hola {userData?.name} </h3> 
        }
          <div className="button-icon-box">
            <span className="icon-box">
              <BsPersonFill />
            </span>
            <button
              onClick={() => {
                  handleLogout();
              }}
            >
                Logout
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
