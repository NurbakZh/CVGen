// @ts-nocheck
function stryNS_9fa48() {
  var g = new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
const root = ReactDOM.createRoot((document.getElementById('root') as HTMLElement));
const router = createBrowserRouter(stryMutAct_9fa48("714") ? [] : (stryCov_9fa48("714"), [stryMutAct_9fa48("715") ? {} : (stryCov_9fa48("715"), {
  path: stryMutAct_9fa48("716") ? "" : (stryCov_9fa48("716"), "/"),
  element: <Main />
}), stryMutAct_9fa48("717") ? {} : (stryCov_9fa48("717"), {
  path: stryMutAct_9fa48("718") ? "" : (stryCov_9fa48("718"), "/login"),
  element: <Login />
}), stryMutAct_9fa48("719") ? {} : (stryCov_9fa48("719"), {
  path: stryMutAct_9fa48("720") ? "" : (stryCov_9fa48("720"), "/register"),
  element: <Register />
})]));
root.render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();