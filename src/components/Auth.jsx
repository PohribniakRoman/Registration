import { useEffect, useState } from "react";
import Login from "./auth/login";
import Register from "./auth/Register";

export default function App() {
  useEffect(()=>{
    fetch("http://localhost:5000/api/isAuthenticated", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "token",
      }),
    }).then(data=>{
      console.log(data.json().then(data=>{
        console.log(data);
      }));
    })
  })
  const [isAuthenticated, updateAuth] = useState(false);
  const [isLogined, updateLogin] = useState(false);
  return (
    <section>
      {isAuthenticated ? isLogined ? <App /> : <Login /> : <Register />}
    </section>
  );
}
