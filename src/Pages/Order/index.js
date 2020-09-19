import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { customStyles, paginationOptions } from "../../Shared/config";

import Api from "../../Services/Api";
import App from "../../Container/app";

export default function Order(props) {
  const [orders, setOrders] = useState([]);

  const handleGetData = async () => {
    var condition = "?like=true";
    const response = await Api.get(`/v1/orders/all${condition.toLowerCase()}`);
    const data = response.data;
    setOrders(data);
  };

  const Button = (props) => (
    <button
      onClick={() => {
        handleEditOrder(props.id);
      }}
      className="btn btn-md btn-success"
    >
      <i className="fas fa-edit"></i> Editar
    </button>
  );

  const columns = [
    {
      name: "Id",
      selector: "id",
      sortable: false,
      grow: 0,
    },
    {
      name: "Departamento",
      selector: "departament",
      sortable: true,
    },
    {
      name: "Agência",
      selector: "agency",
      sortable: true,
    },
    {
      name: "Loja",
      selector: "store",
      sortable: true,
    },
    {
      name: "Data",
      selector: "shipDate",
      sortable: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
    },
    {
      name: "Lote",
      selector: "lot",
      sortable: true,
    },
    {
      name: "",
      button: true,
      cell: (row) => <Button id={row.id}></Button>,
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];

  const handleEditOrder = (id) => {
    props.history.push({
      pathname: "reservas/editar/" + id,
    });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">
            <i class="far fa-clipboard"></i>&nbsp;Reservas
          </div>
        </div>
        <div className="card-body ">
          <form className="form">
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>Campo:</label>
                <select className="form-control" id="field" name="field">
                  <option value="id">Reserva</option>
                  <option value="departament">Departamento</option>
                  <option value="agency">Agência</option>
                  <option value="store">Loja</option>
                  <option value="requestedName">Requisitante</option>
                  <option value="requestedId">Matricula</option>
                  <option value="lot">Lote</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label>Que:</label>
                <select className="form-control" id="operator" name="operator">
                  <option value="like">Contenha</option>
                  <option value="igual">seja igual a</option>
                </select>
              </div>
              <div className="form-group col-md-8">
                <label>Texto:</label>
                <div className="input-group">
                  <input id="textSearch" type="text" className="form-control" />
                  <div className="input-group-append">
                    <button
                      onClick={handleGetData}
                      className="btn btn-success"
                      type="button"
                    >
                      <i className="fas fa-search"></i> Pesquisar
                    </button>
                    <Link to="/reservas/importar">
                      <button className="btn btn-success" type="button">
                        <i className="fas fa-download"></i> Importar
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-2">
                <label>De:</label>
                <input id="dateInitial" type="date" className="form-control" />
              </div>
              <div className="form-group col-md-2">
                <label>Até:</label>
                <input id="dateFinish" type="date" className="form-control" />
              </div>
              <div className="form-group col-md-8"></div>
            </div>
            <div className="">
              <div className="">
                <DataTable
                  columns={columns}
                  data={orders.data}
                  noDataComponent={""}
                  noHeader
                  defaultSortField="name"
                  customStyles={customStyles}
                  pagination
                  paginationComponentOptions={paginationOptions}
                  highlightOnHover
                  striped
                  pointerOnHover
                  dense
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </App>
  );
}
