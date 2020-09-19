import React, { useState } from "react";
import fetchJsonp from "fetch-jsonp";
import { Link } from "react-router-dom";

import { cnpjMask, phoneMask, cepMask } from "../../Shared/masks";
import RemoveCharactersCNPJ_CPF from "../../Shared/utils";

import App from "../../Container/app";
import Api from "../../Services/Api";

export default function ShippingCompanyFormNew() {
  const [shippingCompany, setShippingCompany] = useState({
    id: "",
    name: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    zipCode: "",
    city: "",
    uf: "",
    email: "",
    cnpj: "",
    telephone: "",
    cellPhone: "",
    ie: "",
    im: "",
  });

  const [resultPost, setResultPost] = useState({
    success: false,
    message: "",
    data: [],
  });

  const handleUpdateShippingCompany = (e) => {
    e.preventDefault();
    const data = {
      Name: shippingCompany.name,
      Street: shippingCompany.street,
      Number: shippingCompany.number,
      Complement: shippingCompany.complement,
      Neighborhood: shippingCompany.neighborhood,
      ZipCode: shippingCompany.zipCode,
      City: shippingCompany.city,
      Uf: shippingCompany.uf,
      Email: shippingCompany.email,
      Cnpj: shippingCompany.cnpj,
      Telephone: shippingCompany.telephone,
      CellPhone: shippingCompany.cellPhone,
      IE: shippingCompany.ie,
      IM: shippingCompany.im,
    };
    Api.post("/v1/shippingcompanies", data).then((result) =>
      setResultPost({
        success: result.data.success,
        message: result.data.message,
        data: result.data.data,
      })
    );
  };

  const onChange = (e) => {
    e.persist();
    setShippingCompany({ ...shippingCompany, [e.target.name]: e.target.value });
  };

  //Mask
  const setCep = (value) => {
    const maskedCEP = cepMask(value);
    setShippingCompany({ ...shippingCompany, zipCode: maskedCEP });
  };
  const setPhone = (value) => {
    const maskedPhone = phoneMask(value);
    setShippingCompany({ ...shippingCompany, telephone: maskedPhone });
  };
  const setCellphone = (value) => {
    const maskedCellphone = phoneMask(value);
    setShippingCompany({ ...shippingCompany, cellPhone: maskedCellphone });
  };
  const setCNPJ = (value) => {
    const maskedCNPJ = cnpjMask(value);
    setShippingCompany({ ...shippingCompany, cnpj: maskedCNPJ });
  };

  const handleGetDataOnReceitaWS = (e) => {
    e.preventDefault();
    var cnpj = RemoveCharactersCNPJ_CPF(shippingCompany.cnpj);
    const urlReceitaWS = `https://www.receitaws.com.br/v1/cnpj/${cnpj}`;
    fetchJsonp(urlReceitaWS)
      .then((res) => res.json())
      .then((res) => {
        setShippingCompany({
          name: res.nome,
          street: res.logradouro,
          number: res.numero,
          complement: res.complemento,
          neighborhood: res.bairro,
          zipCode: res.cep,
          city: res.municipio,
          uf: res.uf,
          email: res.email,
          cnpj: shippingCompany.cnpj,
          telephone: res.telefone,
          ie: shippingCompany.ie,
          im: shippingCompany.im,
        });
      });
  };

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">Transportadora</div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleUpdateShippingCompany}>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label>Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    defaultValue={shippingCompany.name}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Endereço:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="street"
                    name="street"
                    defaultValue={shippingCompany.street}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-2">
                  <label>Número:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="number"
                    name="number"
                    defaultValue={shippingCompany.number}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Complemento:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="complement"
                    name="complement"
                    defaultValue={shippingCompany.complement}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>Bairro:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="neighborhood"
                    name="neighborhood"
                    defaultValue={shippingCompany.neighborhood}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-1">
                  <label>CEP:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    name="zipCode"
                    value={shippingCompany.zipCode}
                    onChange={(e) => setCep(e.target.value)}
                    placeholder="99999-999"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Cidade:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    defaultValue={shippingCompany.city}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-2">
                  <label>UF:</label>
                  <select
                    className="form-control"
                    id="uf"
                    name="uf"
                    value={shippingCompany.uf}
                    onChange={onChange}
                  >
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espirito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
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
                    defaultValue={shippingCompany.email}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Telefone:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="telephone"
                    name="telephone"
                    value={shippingCompany.telephone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(99) 99999-9999"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Celular:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cellPhone"
                    name="cellPhone"
                    value={shippingCompany.cellPhone}
                    onChange={(e) => setCellphone(e.target.value)}
                    placeholder="(99) 99999-9999"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label>CNPJ:</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cnpj"
                      name="cnpj"
                      value={shippingCompany.cnpj}
                      onChange={(e) => setCNPJ(e.target.value)}
                      placeholder="99.999.999/9999-99"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="btnReceitaWS"
                        onClick={handleGetDataOnReceitaWS}
                      >
                        Busca dados
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group col-md-4">
                  <label>Inscrição municipal:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="im"
                    name="im"
                    defaultValue={shippingCompany.im}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label>Inscrição estadual:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="ie"
                    name="ie"
                    defaultValue={shippingCompany.ie}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button
                    type="submit"
                    className="btn btn-success"
                    disabled={resultPost.success}
                  >
                    <i className="fas fa-save"></i> Gravar
                  </button>
                  <Link to="/transportadoras">
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
