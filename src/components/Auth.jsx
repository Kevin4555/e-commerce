import React from "react";
import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export default function Auth() {
  let user = useSelector((state) => state.persistedReducer.user);
  console.log(user);
  if (user) {
    return <Outlet />;
  }
  return <Navigate to={"/login"} />;
}