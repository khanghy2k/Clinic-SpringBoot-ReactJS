import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthRoute(props) {
  let token = sessionStorage.getItem("token");
  if (token) {
    return props.element;
  } else {
    return <Navigate to="/login" />;
  }
}
