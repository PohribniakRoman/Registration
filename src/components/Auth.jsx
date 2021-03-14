import { useState } from "react";
import Login from "./auth/login";
import Register from "./auth/Register";

export default function App(){
    const [isAuthenticated,updateAuth] = useState(false);
    return(
        <section>
            {isAuthenticated ? <Login /> : <Register />}
        </section>
    )
}