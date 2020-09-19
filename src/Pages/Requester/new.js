import React, { useState } from "react";
import { Link } from "react-router-dom";

import App from "../../Container/app";
import Api from "../../Services/Api";

export default function RequesterFormNew() {
  const [requester, setRequester] = useState({
    id: "",
    name: "",
    enrollment: "",
    email: "",
  });

  const [resultPost, setResultPost] = useState({
    success: true,
    message: "",
    data: [],
  });

  const handleUpdateRequester = (e) => {
    e.preventDefault();
    const data = {
      Name: requester.name,
      Enrollment: requester.enrollment,
      Email: requester.email,
    };
    Api.post("/v1/requesters", data).then((result) => {
      setResultPost({
        success: result.data.success,
        message: result.data.message,
        data: result.data.data,
      });
    });
  };

  const onChange = (e) => {
    e.persist();
    setRequester({ ...requester, [e.target.name]: e.target.value });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">Requisitante</div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleUpdateRequester}>
            <div className="form-row">
              <div className="form-group col-md-10">
                <label>Nome:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  defaultValue={requester.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-2">
                <label>Matricula:</label>
                <input
                  type="text"
                  className="form-control"
                  id="enrollment"
                  name="enrollment"
                  defaultValue={requester.enrollment}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  defaultValue={requester.email}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-success">
                  <i className="fas fa-save"></i> Gravar
                </button>
                <Link to="/requisitantes">
                  <button type="submit" className="btn btn-success">
                    <i className="fas fa-arrow-left"></i> Voltar
                  </button>
                </Link>
              </div>
              <div className="col text-danger text-right">
                {resultPost.message}
                {resultPost.success
                  ? ""
                  : resultPost?.data?.map((item, i) => (
                      <div key={i}>{item.message}</div>
                    ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </App>
  );
}
