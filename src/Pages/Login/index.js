import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../img/user.png";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // const res = await api.post("v1/users/login", {
    //   Login: user,
    //   Password: password,
    // });
    // if (res.data.success) {
    //   localStorage.setItem("user", JSON.stringify(res.data.data));
    //   history.push("/");
    // } else {
    // }

    if (user === "fabricio" && password === "123@abc") {
      localStorage.setItem("user", "LOGADO");
      history.push("/");
    } else {
    }
  }

  return (
    <div className="form-screen">
      <div className="card account-dialog">
        <div className="card-header bg-success text-white">
          FCAExpress :: Suprimentos
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="text-center mb-4">
              <img className="mb-4" src={Logo} alt="acesso retritro" />
              <h1 className="h3 mb-3 font-weight-normal">Acesso restrito</h1>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="login"
                name="login"
                placeholder="Usuário"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="account-dialog-actions">
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
