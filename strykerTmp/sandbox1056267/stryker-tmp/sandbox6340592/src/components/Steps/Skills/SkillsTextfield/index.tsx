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
export const SkillsTextfield: FC<Props> = ({
  handleChange,
  index,
  value
}) => {
  if (stryMutAct_9fa48("548")) {
    {}
  } else {
    stryCov_9fa48("548");
    const handleSkillChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("549")) {
        {}
      } else {
        stryCov_9fa48("549");
        handleChange(e.target.value, index);
      }
    }, stryMutAct_9fa48("550") ? [] : (stryCov_9fa48("550"), [index, handleChange]));
    return <TextField inputProps={stryMutAct_9fa48("551") ? {} : (stryCov_9fa48("551"), {
      maxLength: 50,
      style: stryMutAct_9fa48("552") ? {} : (stryCov_9fa48("552"), {
        fontFamily: stryMutAct_9fa48("553") ? "" : (stryCov_9fa48("553"), 'Manrope')
      })
    })} FormHelperTextProps={stryMutAct_9fa48("554") ? {} : (stryCov_9fa48("554"), {
      style: stryMutAct_9fa48("555") ? {} : (stryCov_9fa48("555"), {
        alignSelf: stryMutAct_9fa48("556") ? "" : (stryCov_9fa48("556"), 'end')
      })
    })} value={value} helperText={stryMutAct_9fa48("557") ? `` : (stryCov_9fa48("557"), `${value.length}/${50}`)} sx={stryMutAct_9fa48("558") ? {} : (stryCov_9fa48("558"), {
      mt: 2,
      width: stryMutAct_9fa48("559") ? "" : (stryCov_9fa48("559"), '100%'),
      '& .MuiInputBase-root': stryMutAct_9fa48("560") ? {} : (stryCov_9fa48("560"), {
        background: stryMutAct_9fa48("561") ? "" : (stryCov_9fa48("561"), 'white'),
        borderRadius: stryMutAct_9fa48("562") ? "" : (stryCov_9fa48("562"), '12px'),
        height: stryMutAct_9fa48("563") ? "" : (stryCov_9fa48("563"), '50px')
      })
    })} label={stryMutAct_9fa48("564") ? `` : (stryCov_9fa48("564"), `Skill ${stryMutAct_9fa48("565") ? index - 1 : (stryCov_9fa48("565"), index + 1)}`)} onChange={handleSkillChange} />;
  }
};