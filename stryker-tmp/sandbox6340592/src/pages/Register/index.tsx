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
import React from "react";
import Box from "@mui/material/Box";
import { Reg } from "./Reg";
export const Register: React.FC = () => {
  if (stryMutAct_9fa48("987")) {
    {}
  } else {
    stryCov_9fa48("987");
    return <div style={stryMutAct_9fa48("988") ? {} : (stryCov_9fa48("988"), {
      width: stryMutAct_9fa48("989") ? "" : (stryCov_9fa48("989"), '100%'),
      height: stryMutAct_9fa48("990") ? "" : (stryCov_9fa48("990"), '100%')
    })}>
            <Box sx={stryMutAct_9fa48("991") ? {} : (stryCov_9fa48("991"), {
        p: stryMutAct_9fa48("992") ? {} : (stryCov_9fa48("992"), {
          xs: stryMutAct_9fa48("993") ? "" : (stryCov_9fa48("993"), '24px'),
          sm: stryMutAct_9fa48("994") ? "" : (stryCov_9fa48("994"), '36px'),
          md: stryMutAct_9fa48("995") ? "" : (stryCov_9fa48("995"), '72px')
        })
      })}>
                <Reg />
            </Box>
        </div>;
  }
};