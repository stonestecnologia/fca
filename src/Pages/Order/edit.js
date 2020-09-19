import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Api from "../../Services/Api";
import App from "../../Container/app";

export default function OrderFormEdit(props) {
  const [order, setOrder] = useState({
    Id: "",
    Departament: "",
    Agency: "",
    Store: "",
    RequesterId: "",
    Status: "",
    ShipDate: "",
  });

  const [resultPost, setResultPost] = useState({
    success: true,
    message: "",
    data: [],
  });

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    const data = {
      Id: parseInt(props.match.params.id),
      Departament: order.Departament,
      Agency: order.Agency,
      Store: order.Store,
      RequesterId: order.RequesterId,
      Status: order.status,
      ShipDate: order.shipDate,
    };
    Api.put("/v1/orders", data).then((result) => {
      setResultPost({
        success: result.data.success,
        message: result.data.message,
        data: result.data.data,
      });
    });
  };

  const url = `/v1/orders/${props.match.params.id}`;
  useEffect(() => {
    const GetData = async () => {
      const response = await Api.get(url);
      setOrder(response.data.data);
    };
    GetData();
  }, [url]);

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">
            <i class="far fa-clipboard"></i>&nbsp;Reserva
          </div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleUpdateOrder}>
            <div className="form-group mb-2">
              <label>Reserva :</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="id"
                name="id"
                defaultValue={order.id}
              />
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <button type="submit" className="btn btn-success">
                    <i className="fas fa-save"></i> Gravar
                  </button>
                  <Link to="/produtos">
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
            </div>
          </form>
        </div>
      </div>
    </App>
  );
}
