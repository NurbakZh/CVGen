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
import React, { type FC } from 'react';
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { LanguagesTextField } from "./LanguagesTextField";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  handleNewLanguages: () => void;
  languages: string[];
  handleLanguagesChange: (value: string, index: number) => void;
}
export const Languages: FC<Props> = ({
  handleNewLanguages,
  languages,
  handleLanguagesChange,
  onClickNext,
  onClickBack,
  activeStep,
  steps
}) => {
  if (stryMutAct_9fa48("450")) {
    {}
  } else {
    stryCov_9fa48("450");
    return <Box sx={stryMutAct_9fa48("451") ? {} : (stryCov_9fa48("451"), {
      height: stryMutAct_9fa48("452") ? "" : (stryCov_9fa48("452"), '100%'),
      display: stryMutAct_9fa48("453") ? "" : (stryCov_9fa48("453"), 'flex'),
      flexDirection: stryMutAct_9fa48("454") ? "" : (stryCov_9fa48("454"), 'column'),
      justifyContent: stryMutAct_9fa48("455") ? "" : (stryCov_9fa48("455"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("456") ? {} : (stryCov_9fa48("456"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("457") ? "" : (stryCov_9fa48("457"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("458") ? "" : (stryCov_9fa48("458"), '19px'),
          lineHeight: stryMutAct_9fa48("459") ? "" : (stryCov_9fa48("459"), '28px')
        })}>
                    Step 6. Add information about programming languages
                </Typography>
                {languages.map((value, index) => {
          if (stryMutAct_9fa48("460")) {
            {}
          } else {
            stryCov_9fa48("460");
            return <LanguagesTextField value={value} handleChange={handleLanguagesChange} index={index} key={index} />;
          }
        })}
                <Button variant="contained" onClick={handleNewLanguages} sx={stryMutAct_9fa48("461") ? {} : (stryCov_9fa48("461"), {
          width: stryMutAct_9fa48("462") ? "" : (stryCov_9fa48("462"), '100%'),
          backgroundColor: stryMutAct_9fa48("463") ? "" : (stryCov_9fa48("463"), '#526ED3'),
          textTransform: stryMutAct_9fa48("464") ? "" : (stryCov_9fa48("464"), 'none'),
          borderRadius: stryMutAct_9fa48("465") ? "" : (stryCov_9fa48("465"), '12px'),
          padding: stryMutAct_9fa48("466") ? "" : (stryCov_9fa48("466"), '16px 70px'),
          marginTop: stryMutAct_9fa48("467") ? "" : (stryCov_9fa48("467"), '24px')
        })}>
                    Add New Language
                </Button>
            </Box>
            <Box sx={stryMutAct_9fa48("468") ? {} : (stryCov_9fa48("468"), {
        display: stryMutAct_9fa48("469") ? "" : (stryCov_9fa48("469"), 'flex'),
        flexDirection: stryMutAct_9fa48("470") ? "" : (stryCov_9fa48("470"), 'row'),
        justifyContent: stryMutAct_9fa48("471") ? "" : (stryCov_9fa48("471"), 'space-between'),
        mb: stryMutAct_9fa48("472") ? "" : (stryCov_9fa48("472"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("475") ? activeStep !== 0 : stryMutAct_9fa48("474") ? false : stryMutAct_9fa48("473") ? true : (stryCov_9fa48("473", "474", "475"), activeStep === 0)} sx={stryMutAct_9fa48("476") ? {} : (stryCov_9fa48("476"), {
          color: stryMutAct_9fa48("477") ? "" : (stryCov_9fa48("477"), '#526ED3'),
          border: (stryMutAct_9fa48("480") ? activeStep !== 0 : stryMutAct_9fa48("479") ? false : stryMutAct_9fa48("478") ? true : (stryCov_9fa48("478", "479", "480"), activeStep === 0)) ? stryMutAct_9fa48("481") ? "" : (stryCov_9fa48("481"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("482") ? "" : (stryCov_9fa48("482"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("483") ? "" : (stryCov_9fa48("483"), 'none'),
          borderRadius: stryMutAct_9fa48("484") ? "" : (stryCov_9fa48("484"), '12px'),
          padding: stryMutAct_9fa48("485") ? "" : (stryCov_9fa48("485"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("486") ? {} : (stryCov_9fa48("486"), {
          backgroundColor: stryMutAct_9fa48("487") ? "" : (stryCov_9fa48("487"), '#526ED3'),
          textTransform: stryMutAct_9fa48("488") ? "" : (stryCov_9fa48("488"), 'none'),
          borderRadius: stryMutAct_9fa48("489") ? "" : (stryCov_9fa48("489"), '12px'),
          padding: stryMutAct_9fa48("490") ? "" : (stryCov_9fa48("490"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("493") ? activeStep !== steps - 1 : stryMutAct_9fa48("492") ? false : stryMutAct_9fa48("491") ? true : (stryCov_9fa48("491", "492", "493"), activeStep === (stryMutAct_9fa48("494") ? steps + 1 : (stryCov_9fa48("494"), steps - 1)))) ? stryMutAct_9fa48("495") ? "" : (stryCov_9fa48("495"), 'Finish') : stryMutAct_9fa48("496") ? "" : (stryCov_9fa48("496"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};