import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";

import DataTable from "react-data-table-component";
import { customStyles, paginationOptions } from "../../Shared/config";

import App from "../../Container/app";

export default function OrderImport(props) {
  const [plan, setPlan] = useState([]);

  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        const jsonString = JSON.stringify(arrayToJSONObject(resp.rows));
        const stringJson = JSON.parse(jsonString);
        setPlan(stringJson);
      }
    });
  };

  function arrayToJSONObject(arr) {
    var keys = [
      "booking",
      "shipDate",
      "departament",
      "agency",
      "store",
      "requesterId",
      "item",
      "product",
      "quantity",
      "unity",
      "price",
    ];
    var newArr = arr.slice(1, arr.length);
    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    return formatted;
  }

  const columns = [
    {
      name: "Reserva",
      selector: "booking",
      sortable: false,
      grow: 0,
    },
    {
      name: "Data",
      selector: "shipDate",
      sortable: true,
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
      name: "Requisitante",
      selector: "requesterId",
      sortable: true,
    },
    {
      name: "Item",
      selector: "item",
      sortable: true,
    },
    {
      name: "Produto",
      selector: "product",
      sortable: true,
    },
    {
      name: "Quantidade",
      selector: "quantity",
      sortable: true,
    },
    {
      name: "Unidade",
      selector: "unity",
      sortable: true,
    },
    {
      name: "Preço",
      selector: "price",
      sortable: true,
    },
  ];

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">
            <i class="far fa-clipboard"></i>&nbsp;Importar reservas SAP
          </div>
        </div>
        <div className="card-body ">
          <form className="form">
            <div className="form-row">
              <div className="form-group col-md-2">
                <div className="">
                  <input
                    type="file"
                    id="input-file"
                    name="input-file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    onChange={fileHandler.bind(this)}
                    hidden
                  />
                  <label
                    className="btn btn-success"
                    htmlFor="input-file"
                    role="button"
                  >
                    Escolher arquivo
                  </label>
                </div>
              </div>
            </div>
            <DataTable
              columns={columns}
              data={plan}
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
          </form>
        </div>
      </div>
    </App>
  );
}
