import React, { Component } from "react";
import App from "../../Container/app";

class Dashboard extends Component {
  render() {
    return (
      <App>
        <div>
          <div className="row dash-row">
            <div className="col-xl-4">
              <div className="stats stats-primary">
                <h3 className="stats-title"> Reservas </h3>
                <div className="stats-content">
                  <div className="stats-icon">
                    <i className="fas fa-cart-arrow-down"></i>
                  </div>
                  <div className="stats-data">
                    <div className="stats-number">999.999</div>
                    <div className="stats-change">
                      <span className="stats-timeframe"> neste mês</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="stats stats-success ">
                <h3 className="stats-title"> Reservas atendidas </h3>
                <div className="stats-content">
                  <div className="stats-icon">
                    <i className="fas fa-cart-arrow-down"></i>
                  </div>
                  <div className="stats-data">
                    <div className="stats-number">999.999</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="stats stats-danger">
                <h3 className="stats-title"> Reservas pendentes </h3>
                <div className="stats-content">
                  <div className="stats-icon">
                    <i className="fas fa-cart-arrow-down"></i>
                  </div>
                  <div className="stats-data">
                    <div className="stats-number">999.999</div>
                    <div className="stats-change">
                      <span className="stats-timeframe">
                        {" "}
                        com itens pendentes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12"></div>
          </div>
        </div>
      </App>
    );
  }
}
export default Dashboard;
