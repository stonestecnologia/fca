import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Api from "../../Services/Api";
import App from "../../Container/app";

export default function ConfigurationFormEdit(props) {
  const [configuration, setConfiguration] = useState({
    Id: "",
    OrderLastIdLotNumber: "",
    APIJadLog_Modality: "",
    APIJadLog_CheckingAccount: "",
    APIJadLog_CollectType: "",
    APIJadLog_FreightType: "",
    APIJadLog_OriginUnit: "",
    APIJadLog_TargetUnit: "",
    APIJadLog_PickupOriginCode: "",
    APIJadLog_PickupTargetCode: "",
    APIJadLog_Contract: "",
    APIJadLog_Service: "",
  });

  const [resultPost, setResultPost] = useState({
    success: true,
    message: "",
    data: [],
  });

  const handleUpdateConfiguration = (e) => {
    e.preventDefault();
    const data = {
      Id: parseInt(props.match.params.id),
      OrderLastIdLotNumber: configuration.OrderLastIdLotNumber,
      APIJadLog_Modality: configuration.APIJadLog_Modality,
      APIJadLog_CheckingAccount: configuration.APIJadLog_CheckingAccount,
      APIJadLog_CollectType: configuration.APIJadLog_CollectType,
      APIJadLog_FreightType: configuration.APIJadLog_FreightType,
      APIJadLog_OriginUnit: configuration.APIJadLog_OriginUnit,
      APIJadLog_TargetUnit: configuration.APIJadLog_TargetUnit,
      APIJadLog_PickupOriginCode: configuration.APIJadLog_PickupOriginCode,
      APIJadLog_PickupTargetCode: configuration.APIJadLog_PickupTargetCode,
      APIJadLog_Contract: configuration.APIJadLog_Contract,
      APIJadLog_Service: configuration.APIJadLog_Service,
    };

    Api.put("/v1/configurations", data).then((result) => {
      setResultPost({
        success: result.data.success,
        message: result.data.message,
        data: result.data.data,
      });
    });
  };

  const url = `/v1/configurations/${props.match.params.id}`;
  useEffect(() => {
    const GetData = async () => {
      const response = await Api.get(url);
      setConfiguration(response.data.data);
    };
    GetData();
  }, [url]);

  return (
    <App>
      <div className="card spur-card">
        <div className="card-header bg-success text-white">
          <div className="spur-card-title">Configurações gerais</div>
        </div>
        <div className="card-body ">
          <form onSubmit={handleUpdateConfiguration}>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label>Ultimo lote:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label>Modalidade:</label>
                  <select className="form-control" id="field" name="field">
                    <option value="3">Aéreo</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label>Conta Corrente:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Tipo da coleta</label>
                  <select
                    className="form-control"
                    id="operator"
                    name="operator"
                  >
                    <option value="K">
                      Solicitação de coleta no remetente
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label>Tipo do frete</label>
                  <select
                    className="form-control"
                    id="operator"
                    name="operator"
                  >
                    <option value="0">Normal</option>
                  </select>
                </div>
                <div className="form-group col-md-1">
                  <label>Tipo da coleta</label>
                  <select
                    className="form-control"
                    id="operator"
                    name="operator"
                  >
                    <option value="1">Com PIN</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label>Contrato:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label>Unidade de origem:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Unidade de Destino:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Pickup de Destino:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Pickup de destino:</label>
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
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
