import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function NeedAuth(props) {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);

  return auth.isLogged ? (
    props.children
  ) : (
    <Navigate to="/auth-form" replace state={{ preLocation: location }} />
  );
}
