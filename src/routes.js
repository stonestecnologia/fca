import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import ConfigurationFormEdit from "./Pages/Configuration/edit.js";

import ShippingCompany from "./Pages/ShippingCompany";
import ShippingCompanyFormEdit from "./Pages/ShippingCompany/edit.js";
import ShippingCompanyFormNew from "./Pages/ShippingCompany/new.js";

import Store from "./Pages/Store";
import StoreFormEdit from "./Pages/Store/edit.js";
import StoreFormNew from "./Pages/Store/new.js";

import Product from "./Pages/Product";
import ProductFormEdit from "./Pages/Product/edit.js";
import ProductFormNew from "./Pages/Product/new.js";

import Requester from "./Pages/Requester";
import RequesterFormEdit from "./Pages/Requester/edit.js";
import RequesterFormNew from "./Pages/Requester/new.js";

import Order from "./Pages/Order";
import OrderFormEdit from "./Pages/Order/edit.js";
import OrderImport from "./Pages/Order/import.js";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={Dashboard} />
      <PrivateRoute path="/configuracoes" component={ConfigurationFormEdit} />
      <PrivateRoute path="/lojas" component={Store} />
      <PrivateRoute path="/lojas/nova" component={StoreFormNew} />
      <PrivateRoute path="/lojas/editar/:id" component={StoreFormEdit} />
      <PrivateRoute path="/reservas" component={Order} />
      <PrivateRoute path="/reservas/importar" component={OrderImport} />
      <PrivateRoute path="/reservas/editar/:id" component={OrderFormEdit} />
      <PrivateRoute path="/transportadoras" component={ShippingCompany} />
      <PrivateRoute
        path="/transportadoras/nova"
        component={ShippingCompanyFormNew}
      />
      <PrivateRoute
        path="/transportadoras/editar/:id"
        component={ShippingCompanyFormEdit}
      />
      <PrivateRoute path="/produtos" component={Product} />
      <PrivateRoute path="/produtos/novo" component={ProductFormNew} />
      <PrivateRoute path="/produtos/editar/:id" component={ProductFormEdit} />
      <PrivateRoute path="/requisitantes" component={Requester} />
      <PrivateRoute path="/requisitantes/novo" component={RequesterFormNew} />
      <PrivateRoute
        path="/requisitantes/editar/:id"
        component={RequesterFormEdit}
      />
    </Switch>
  </BrowserRouter>
);
export default Routes;
