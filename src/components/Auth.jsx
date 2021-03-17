import { useEffect, useState } from "react";
import { Endpoints } from "../Endpoints";
import Login from "./auth/login";
import Register from "./auth/Register";

export default function App() {
  useEffect(()=>{
    fetch(`${Endpoints.host + Endpoints.isAuthenticated}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "token",
      }),
    }).then(data=>{
      data.json().then(data=>{
        updateLogin(data.isAuthenticated);
      });
    })
  },[])
  const [isAuthenticated, updateAuth] = useState(false);
  const [isLogined, updateLogin] = useState(false);
  function loginData(data) {
  }
  return (
    <section>
      {isLogined ? <Register /> : <Login loginData={loginData}/> }
    </section>
  );
}
