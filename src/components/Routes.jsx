import { BrowserRouter, Route } from "react-router-dom";


export default function Routes() {
  return (
    <BrowserRouter>
      <section className="auth__wrapper">
        <Route path="/login">
          <Login loginData={loginData} />
        </Route>
        <Route path="/registrate">
          <Register loginData={loginData} />
        </Route>
      </section>
        <ProtectedRoute
          component={Home}
          isAuth={isAuthenticated}
          path="/home"
        />
        <ProtectedRoute
          component={Home}
          isAuth={isAuthenticated}
          path="/*"
        />
    </BrowserRouter>
  );
}
