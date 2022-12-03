import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Login from "../component/Login";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState(null);

  return (
    <div>{user ? <button onClick={logout}>Logout</button> : <Login />}</div>
  );
};
