import { useState } from "react";
import { Endpoints } from "../../Endpoints";
import SendData from "../../hooks/SendData"

function trimmer(str) {
  return str
    .split("")
    .filter((char) => char !== " ")
    .join("")
    .toLocaleLowerCase();
}


export default function Login({loginData}) {
    async function checkCandidate(promise) {
        const resp = await ((await promise).json());
        loginData(resp)
    }
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (trimmer(login).length > 6 && trimmer(password).length > 6) {
                checkCandidate(SendData(`${Endpoints.host + Endpoints.login}`,{login,password}))
        }else{
            alert('Login or password is shorter than necessary')
        }
      }}
    >
      <input
        type="text"
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        name="login"
        required
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        name="password"
        required
      />
      <input type="submit" value="Login" />
    </form>
  );
}
