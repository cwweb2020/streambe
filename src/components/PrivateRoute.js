import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/LoginProvider";

const PrivateRoute = ({ redirect, component }) => {
  const authConsumer = useContext(AuthContext);
  const { token } = authConsumer;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate(redirect);
  });

  return component;
};

export default PrivateRoute;
