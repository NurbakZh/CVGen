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
  handleChange: (value: string, index: number) => void;
  index: number;
  value: string;
}
export const LanguagesTextField: FC<Props> = ({
  handleChange,
  index,
  value
}) => {
  if (stryMutAct_9fa48("432")) {
    {}
  } else {
    stryCov_9fa48("432");
    const handleSkillChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("433")) {
        {}
      } else {
        stryCov_9fa48("433");
        handleChange(e.target.value, index);
      }
    }, stryMutAct_9fa48("434") ? [] : (stryCov_9fa48("434"), [index, handleChange]));
    return <TextField inputProps={stryMutAct_9fa48("435") ? {} : (stryCov_9fa48("435"), {
      maxLength: 50,
      style: stryMutAct_9fa48("436") ? {} : (stryCov_9fa48("436"), {
        fontFamily: stryMutAct_9fa48("437") ? "" : (stryCov_9fa48("437"), 'Manrope')
      })
    })} FormHelperTextProps={stryMutAct_9fa48("438") ? {} : (stryCov_9fa48("438"), {
      style: stryMutAct_9fa48("439") ? {} : (stryCov_9fa48("439"), {
        alignSelf: stryMutAct_9fa48("440") ? "" : (stryCov_9fa48("440"), 'end')
      })
    })} value={value} helperText={stryMutAct_9fa48("441") ? `` : (stryCov_9fa48("441"), `${value.length}/${50}`)} sx={stryMutAct_9fa48("442") ? {} : (stryCov_9fa48("442"), {
      mt: 2,
      width: stryMutAct_9fa48("443") ? "" : (stryCov_9fa48("443"), '100%'),
      '& .MuiInputBase-root': stryMutAct_9fa48("444") ? {} : (stryCov_9fa48("444"), {
        background: stryMutAct_9fa48("445") ? "" : (stryCov_9fa48("445"), 'white'),
        borderRadius: stryMutAct_9fa48("446") ? "" : (stryCov_9fa48("446"), '12px'),
        height: stryMutAct_9fa48("447") ? "" : (stryCov_9fa48("447"), '50px')
      })
    })} label={stryMutAct_9fa48("448") ? `` : (stryCov_9fa48("448"), `Language ${stryMutAct_9fa48("449") ? index - 1 : (stryCov_9fa48("449"), index + 1)}`)} onChange={handleSkillChange} />;
  }
};