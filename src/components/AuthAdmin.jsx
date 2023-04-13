import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export default function AuthAdmin() {
  let user = useSelector((state) => state.persistedReducer.user);
  if (user) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
}
