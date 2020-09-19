import React from "react";
import { Link } from "react-router-dom";

const Content = ({ children }) => (
  <div className="dash">
    <div className="dash-nav dash-nav-dark">
      <header>
        <Link to="#!" className="menu-toggle">
          <i className="fas fa-bars"></i>
        </Link>
        <Link to="/" className="spur-logo">
          &nbsp;<span>FCA Express</span>
        </Link>
      </header>
      <nav className="dash-nav-list">
        <Link to="/" className="dash-nav-item">
          <i className="far fa-chart-bar"></i> Dashboard
        </Link>
        <Link to="/lojas" className="dash-nav-item">
          <i className="fas fa-home"></i>&nbsp;Agências/lojas
        </Link>
        <Link to="/nfe" className="dash-nav-item">
          <i className="fas fa-layer-group"></i> Notas fiscais
        </Link>
        <Link to="/produtos" className="dash-nav-item">
          <i className="fas fa-gift"></i>&nbsp;Produtos
        </Link>
        <Link to="/reservas" className="dash-nav-item">
          <i className="far fa-clipboard"></i> Reservas
        </Link>
        <Link to="/requisitantes" className="dash-nav-item">
          <i className="fas fa-user-check"></i>&nbsp;Requisitantes
        </Link>
        <Link to="/transportadoras" className="dash-nav-item">
          <i className="fas fa-truck-moving"></i>&nbsp;Transportadora
        </Link>
        <Link to="/relatorios/reservas" className="dash-nav-item">
          <i className="fas fa-clipboard-list"></i>&nbsp;Relatório
        </Link>
      </nav>
    </div>
    <div className="dash-app">
      <header className="dash-toolbar">
        <Link to="#!" className="menu-toggle">
          <i className="fas fa-bars"></i>
        </Link>
        <div className="tools">
          <div className="dropdown tools-item">
            <span
              className="dash-nav-dropdown-item"
              id="dropdownMenuUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user"></i>
            </span>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuUser"
            >
              <Link to="/requisitantes" className="dropdown-item">
                <i className="fas fa-layer-group"></i> Profile
              </Link>
              <Link to="/requisitantes" className="dropdown-item">
                <i className="fas fa-layer-group"></i> Configurações
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="dash-content">
        <div className="container-fluid">{children}</div>
      </main>
    </div>
  </div>
);

export default Content;
