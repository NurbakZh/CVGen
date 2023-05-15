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
import { Log } from "./Log";
export const Login: React.FC = () => {
  if (stryMutAct_9fa48("838")) {
    {}
  } else {
    stryCov_9fa48("838");
    return <div style={stryMutAct_9fa48("839") ? {} : (stryCov_9fa48("839"), {
      width: stryMutAct_9fa48("840") ? "" : (stryCov_9fa48("840"), '100%'),
      height: stryMutAct_9fa48("841") ? "" : (stryCov_9fa48("841"), '100%')
    })}>
            <Box sx={stryMutAct_9fa48("842") ? {} : (stryCov_9fa48("842"), {
        p: stryMutAct_9fa48("843") ? {} : (stryCov_9fa48("843"), {
          xs: stryMutAct_9fa48("844") ? "" : (stryCov_9fa48("844"), '24px'),
          sm: stryMutAct_9fa48("845") ? "" : (stryCov_9fa48("845"), '36px'),
          md: stryMutAct_9fa48("846") ? "" : (stryCov_9fa48("846"), '72px')
        })
      })}>
                <Log />
            </Box>
        </div>;
  }
};