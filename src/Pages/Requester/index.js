import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import App from "../../Container/app";
import Api from "../../Services/Api";

import { customStyles, paginationOptions } from "../../Shared/config";

export default function Requester(props) {
  const [textSearch, setTextSearch] = useState("");
  const [requesters, setRequesters] = useState([]);

  const handleGetData = async () => {
    var condition = "?like=true&name=" + textSearch;
    const response = await Api.get(
      `/v1/requesters/all${condition.toLowerCase()}`
    );
    const data = response.data;
    setRequesters(data);
  };

  const Button = (props) => (
    <button
      onClick={() => {
        handleEditRequester(props.id);
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
      name: "Nome",
      selector: "name",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
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

  const handleEditRequester = (id) => {
    props.history.push({
      pathname: "requisitantes/editar/" + id,
    });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">Requisitantes</div>
        </div>
        <div className="card-body ">
          <form className="form">
            <div className="form-row">
              <div className="form-group col-md-12">
                <div className="input-group">
                  <input
                    id="textSearch"
                    type="text"
                    className="form-control"
                    aria-label="loja"
                    aria-describedby="basic-addon2"
                    onChange={(e) => setTextSearch(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      onClick={handleGetData}
                      className="btn btn-success"
                      type="button"
                    >
                      <i className="fas fa-search"></i> Pesquisar
                    </button>
                    <Link to="/requisitantes/novo">
                      <button className="btn btn-success" type="button">
                        <i className="fas fa-plus"></i> Novo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <DataTable
                  columns={columns}
                  data={requesters.data}
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
