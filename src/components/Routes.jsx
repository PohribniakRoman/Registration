import { BrowserRouter } from "react-router-dom";
import Auth from "./Auth";
import ProtectedRoute from "../hooks/ProtectedRoute";
import Home from "./Home";
import { useEffect, useState } from "react";
import { Endpoints } from "../Endpoints";

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([$?*|{}\]\\^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export default function Routes() {
  useEffect(() => {
    fetch(`${Endpoints.host + Endpoints.isAuthenticated}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("user")
      }),
    }).then((data) => {
      data.json().then((data) => {
        console.log(data);
        updateAuth(data.isAuthenticated);
      });
    });
  }, []);
  const [isAuthenticated, updateAuth] = useState(false);
  function updateStatus(status) {
    updateAuth(status.registrated)
  }
  return (
    <BrowserRouter>
      <Auth updateStatus={updateStatus} isAuthenticated={isAuthenticated}/>
      <ProtectedRoute component={Home} isAuth={isAuthenticated} path="/*" />
      <ProtectedRoute component={Home} isAuth={isAuthenticated} path="/home" />
    </BrowserRouter>
  );
}
