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
import React, { type FC, useCallback } from 'react';
import { TextField } from "@mui/material";
interface Props {
  type: string;
  handleChange: (type: string, value: string, index: number) => void;
  index: number;
  value: string;
}
export const EducationTextfield: FC<Props> = ({
  type,
  handleChange,
  index,
  value
}) => {
  if (stryMutAct_9fa48("216")) {
    {}
  } else {
    stryCov_9fa48("216");
    const handleEduChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("217")) {
        {}
      } else {
        stryCov_9fa48("217");
        handleChange(type, e.target.value, index);
      }
    }, stryMutAct_9fa48("218") ? [] : (stryCov_9fa48("218"), [index, handleChange, type]));
    let label = stryMutAct_9fa48("219") ? "Stryker was here!" : (stryCov_9fa48("219"), '');
    let limit = 0;
    if (stryMutAct_9fa48("222") ? type !== 'name' : stryMutAct_9fa48("221") ? false : stryMutAct_9fa48("220") ? true : (stryCov_9fa48("220", "221", "222"), type === (stryMutAct_9fa48("223") ? "" : (stryCov_9fa48("223"), 'name')))) {
      if (stryMutAct_9fa48("224")) {
        {}
      } else {
        stryCov_9fa48("224");
        label = stryMutAct_9fa48("225") ? `` : (stryCov_9fa48("225"), `Education ${stryMutAct_9fa48("226") ? index - 1 : (stryCov_9fa48("226"), index + 1)} Name`);
        limit = 100;
      }
    }
    if (stryMutAct_9fa48("229") ? type !== 'years' : stryMutAct_9fa48("228") ? false : stryMutAct_9fa48("227") ? true : (stryCov_9fa48("227", "228", "229"), type === (stryMutAct_9fa48("230") ? "" : (stryCov_9fa48("230"), 'years')))) {
      if (stryMutAct_9fa48("231")) {
        {}
      } else {
        stryCov_9fa48("231");
        label = stryMutAct_9fa48("232") ? `` : (stryCov_9fa48("232"), `Education ${stryMutAct_9fa48("233") ? index - 1 : (stryCov_9fa48("233"), index + 1)} Years of Education`);
        limit = 100;
      }
    }
    if (stryMutAct_9fa48("236") ? type !== 'descr' : stryMutAct_9fa48("235") ? false : stryMutAct_9fa48("234") ? true : (stryCov_9fa48("234", "235", "236"), type === (stryMutAct_9fa48("237") ? "" : (stryCov_9fa48("237"), 'descr')))) {
      if (stryMutAct_9fa48("238")) {
        {}
      } else {
        stryCov_9fa48("238");
        label = stryMutAct_9fa48("239") ? `` : (stryCov_9fa48("239"), `Education ${stryMutAct_9fa48("240") ? index - 1 : (stryCov_9fa48("240"), index + 1)} Description`);
        limit = 400;
      }
    }
    return <TextField inputProps={stryMutAct_9fa48("241") ? {} : (stryCov_9fa48("241"), {
      maxLength: limit,
      style: stryMutAct_9fa48("242") ? {} : (stryCov_9fa48("242"), {
        fontFamily: stryMutAct_9fa48("243") ? "" : (stryCov_9fa48("243"), 'Manrope')
      })
    })} FormHelperTextProps={stryMutAct_9fa48("244") ? {} : (stryCov_9fa48("244"), {
      style: stryMutAct_9fa48("245") ? {} : (stryCov_9fa48("245"), {
        alignSelf: stryMutAct_9fa48("246") ? "" : (stryCov_9fa48("246"), 'end')
      })
    })} value={value} helperText={stryMutAct_9fa48("247") ? `` : (stryCov_9fa48("247"), `${value.length}/${limit}`)} sx={stryMutAct_9fa48("248") ? {} : (stryCov_9fa48("248"), {
      mt: 1,
      width: stryMutAct_9fa48("249") ? "" : (stryCov_9fa48("249"), '100%'),
      '& .MuiInputBase-root': stryMutAct_9fa48("250") ? {} : (stryCov_9fa48("250"), {
        background: stryMutAct_9fa48("251") ? "" : (stryCov_9fa48("251"), 'white'),
        borderRadius: stryMutAct_9fa48("252") ? "" : (stryCov_9fa48("252"), '12px')
      })
    })} label={label} onChange={handleEduChange} />;
  }
};