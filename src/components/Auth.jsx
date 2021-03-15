import { useState } from "react";
import Login from "./auth/login";
import Register from "./auth/Register";

export default function App() {
  const resp = fetch("http://localhost:5000/api/isAuthenticated", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        token:"token"
    })
  })
  const myResp = await resp;
  console.log(myResp);
  const [isAuthenticated, updateAuth] = useState(false);
  const [isLogined, updateLogin] = useState(false);
  return (
    <section>
      {isAuthenticated ? isLogined ? <App /> : <Login /> : <Register />}
    </section>
  );
}
