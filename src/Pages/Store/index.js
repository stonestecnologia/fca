import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

import { customStyles, paginationOptions } from "../../Shared/config";

import App from "../../Container/app";
import Api from "../../Services/Api";

export default function Store(props) {
  const [textSearch, setTextSearch] = useState("");
  const [stores, setStores] = useState([]);

  const handleGetData = async () => {
    var condition = "?like=true&name=" + textSearch;
    const response = await Api.get(`/v1/stores/all${condition.toLowerCase()}`);
    const data = response.data;
    setStores(data);
  };

  const Button = (props) => (
    <button
      onClick={() => {
        handleEditStore(props.id);
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
      name: "Fantasia",
      selector: "shortName",
      sortable: true,
    },
    {
      name: "Cidade",
      selector: "city",
      sortable: true,
    },
    {
      name: "UF",
      selector: "uf",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Telefone",
      selector: "telephone",
      sortable: true,
    },
    {
      name: "Celular",
      selector: "cellPhone",
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

  const handleEditStore = (id) => {
    props.history.push({
      pathname: "lojas/editar/" + id,
    });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">
            <i className="fas fa-home"></i>&nbsp;Agências/lojas
          </div>
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
                    <Link to="/lojas/nova">
                      <button className="btn btn-success" type="button">
                        <i className="fas fa-plus"></i> Nova
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
                  data={stores.data}
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
