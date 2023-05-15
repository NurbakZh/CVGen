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
  if (stryMutAct_9fa48("324")) {
    {}
  } else {
    stryCov_9fa48("324");
    const handleEmploymentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("325")) {
        {}
      } else {
        stryCov_9fa48("325");
        handleChange(type, e.target.value, index);
      }
    }, stryMutAct_9fa48("326") ? [] : (stryCov_9fa48("326"), [index, handleChange, type]));
    let label = stryMutAct_9fa48("327") ? "Stryker was here!" : (stryCov_9fa48("327"), '');
    let limit = 0;
    if (stryMutAct_9fa48("330") ? type !== 'name' : stryMutAct_9fa48("329") ? false : stryMutAct_9fa48("328") ? true : (stryCov_9fa48("328", "329", "330"), type === (stryMutAct_9fa48("331") ? "" : (stryCov_9fa48("331"), 'name')))) {
      if (stryMutAct_9fa48("332")) {
        {}
      } else {
        stryCov_9fa48("332");
        label = stryMutAct_9fa48("333") ? `` : (stryCov_9fa48("333"), `Job ${stryMutAct_9fa48("334") ? index - 1 : (stryCov_9fa48("334"), index + 1)} Title`);
        limit = 100;
      }
    }
    if (stryMutAct_9fa48("337") ? type !== 'years' : stryMutAct_9fa48("336") ? false : stryMutAct_9fa48("335") ? true : (stryCov_9fa48("335", "336", "337"), type === (stryMutAct_9fa48("338") ? "" : (stryCov_9fa48("338"), 'years')))) {
      if (stryMutAct_9fa48("339")) {
        {}
      } else {
        stryCov_9fa48("339");
        label = stryMutAct_9fa48("340") ? `` : (stryCov_9fa48("340"), `Job ${stryMutAct_9fa48("341") ? index - 1 : (stryCov_9fa48("341"), index + 1)} Years of Work`);
        limit = 100;
      }
    }
    if (stryMutAct_9fa48("344") ? type !== 'descr' : stryMutAct_9fa48("343") ? false : stryMutAct_9fa48("342") ? true : (stryCov_9fa48("342", "343", "344"), type === (stryMutAct_9fa48("345") ? "" : (stryCov_9fa48("345"), 'descr')))) {
      if (stryMutAct_9fa48("346")) {
        {}
      } else {
        stryCov_9fa48("346");
        label = stryMutAct_9fa48("347") ? `` : (stryCov_9fa48("347"), `Job ${stryMutAct_9fa48("348") ? index - 1 : (stryCov_9fa48("348"), index + 1)} Description`);
        limit = 400;
      }
    }
    return <TextField inputProps={stryMutAct_9fa48("349") ? {} : (stryCov_9fa48("349"), {
      maxLength: limit,
      style: stryMutAct_9fa48("350") ? {} : (stryCov_9fa48("350"), {
        fontFamily: stryMutAct_9fa48("351") ? "" : (stryCov_9fa48("351"), 'Manrope')
      })
    })} FormHelperTextProps={stryMutAct_9fa48("352") ? {} : (stryCov_9fa48("352"), {
      style: stryMutAct_9fa48("353") ? {} : (stryCov_9fa48("353"), {
        alignSelf: stryMutAct_9fa48("354") ? "" : (stryCov_9fa48("354"), 'end')
      })
    })} value={value} helperText={stryMutAct_9fa48("355") ? `` : (stryCov_9fa48("355"), `${value.length}/${limit}`)} sx={stryMutAct_9fa48("356") ? {} : (stryCov_9fa48("356"), {
      mt: 1,
      width: stryMutAct_9fa48("357") ? "" : (stryCov_9fa48("357"), '100%'),
      '& .MuiInputBase-root': stryMutAct_9fa48("358") ? {} : (stryCov_9fa48("358"), {
        background: stryMutAct_9fa48("359") ? "" : (stryCov_9fa48("359"), 'white'),
        borderRadius: stryMutAct_9fa48("360") ? "" : (stryCov_9fa48("360"), '12px')
      })
    })} label={label} onChange={handleEmploymentChange} />;
  }
};