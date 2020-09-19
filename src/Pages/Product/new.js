import React, { useState } from "react";
import { Link } from "react-router-dom";

import App from "../../Container/app";
import Api from "../../Services/Api";

export default function ProductFormNew() {
  const [product, setProduct] = useState({
    sapCode: "",
    description: "",
    fcaName: "",
    unity: "",
    price: "",
    ncm: "",
    cst: "",
    cfop: "",
    ncmOutOfState: "",
    cstOutOfState: "",
    cfopOutOfState: "",
  });

  const [resultPost, setResultPost] = useState({
    success: true,
    message: "",
    data: [],
  });

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const data = {
      SAPCode: product.sapCode === "" ? 0 : parseInt(product.sapCode),
      Description: product.description,
      FCAName: product.fcaName,
      Unity: product.unity,
      Price: product.price === "" ? 0 : parseFloat(product.price),
      NCM: product.ncm,
      CST: product.cst,
      CFOP: product.cfop,
      NCMOutOfState: product.ncmOutOfState,
      CSTOutOfState: product.cstOutOfState,
      CFOPOutOfState: product.cfopOutOfState,
      CreatedByUserId: 1,
    };
    console.log(data);
    Api.post("/v1/products", data).then((result) => {
      setResultPost({
        success: result.data.success,
        message: result.data.message,
        data: result.data.data,
      });
    });
  };

  const onChange = (e) => {
    e.persist();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">Produto</div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleUpdateProduct}>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Descrição:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    defaultValue={product.description}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Nome FCA:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fcaName"
                    name="fcaName"
                    defaultValue={product.fcaName}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>Unidade:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="unity"
                    name="unity"
                    defaultValue={product.unity}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Preço:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    defaultValue={product.price}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Código SAP:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sapCode"
                    name="sapCode"
                    defaultValue={product.sapCode}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>NCN:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ncm"
                    name="ncm"
                    defaultValue={product.ncm}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>CST:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cst"
                    name="cst"
                    defaultValue={product.cst}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>CFOP:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cfop"
                    name="cfop"
                    defaultValue={product.cfop}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>NCN Fora do estado:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ncmOutOfState"
                    name="ncmOutOfState"
                    defaultValue={product.ncmOutOfState}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>CST Fora do estado:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cstOutOfState"
                    name="cstOutOfState"
                    defaultValue={product.cstOutOfState}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>CFOP Fora do estado:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cfopOutOfState"
                    name="cfopOutOfState"
                    defaultValue={product.cfopOutOfState}
                    onChange={onChange}
                  />
                </div>
              </div>
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
