import { useEffect, useState } from "react";
import { Endpoints } from "../Endpoints";
import Login from "./auth/login";
import Register from "./auth/Register";
import { BrowserRouter, Route } from "react-router-dom";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Home from "./Home";

export default function App() {
  useEffect(() => {
    fetch(`${Endpoints.host + Endpoints.isAuthenticated}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "token",
      }),
    }).then((data) => {
      data.json().then((data) => {
        updateAuth(data.isAuthenticated);
      });
    });
  }, []);
  const [isAuthenticated, updateAuth] = useState(false);
  function loginData(data) {
    console.log(data);
  }
  return (
    <BrowserRouter>
      <section className="auth__wrapper">
        <Route path="/login">
          <Login loginData={loginData} />
        </Route>
        <Route path="/registrate">
          <Register loginData={loginData} />
        </Route>
          <ProtectedRoute component={Home} isAuth={isAuthenticated} path="/home"/>
      </section>
    </BrowserRouter>
  );
}
