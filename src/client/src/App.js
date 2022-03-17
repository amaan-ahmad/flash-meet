import "./styles/global.css";
import React, { useContext } from "react";
import Header from "./components/Header";
import { UserContext } from "./context/user";

export default function App() {
  const { token, user, handleAuth } = useContext(UserContext);

  return (
    <>
      <Header />
      {!token ? (
        <button onClick={handleAuth}>Login with Google</button>
      ) : user ? (
        <h3>Welcome, {user.name}!</h3>
      ) : (
        "loading...."
      )}
    </>
  );
}
