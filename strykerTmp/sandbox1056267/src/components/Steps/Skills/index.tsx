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
import { SkillsTextfield } from "./SkillsTextfield";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  handleNewSkill: () => void;
  skills: string[];
  handleSkillsChange: (value: string, index: number) => void;
}
export const Skills: FC<Props> = ({
  skills,
  handleNewSkill,
  handleSkillsChange,
  onClickNext,
  onClickBack,
  activeStep,
  steps
}) => {
  if (stryMutAct_9fa48("566")) {
    {}
  } else {
    stryCov_9fa48("566");
    return <Box sx={stryMutAct_9fa48("567") ? {} : (stryCov_9fa48("567"), {
      height: stryMutAct_9fa48("568") ? "" : (stryCov_9fa48("568"), '100%'),
      display: stryMutAct_9fa48("569") ? "" : (stryCov_9fa48("569"), 'flex'),
      flexDirection: stryMutAct_9fa48("570") ? "" : (stryCov_9fa48("570"), 'column'),
      justifyContent: stryMutAct_9fa48("571") ? "" : (stryCov_9fa48("571"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("572") ? {} : (stryCov_9fa48("572"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("573") ? "" : (stryCov_9fa48("573"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("574") ? "" : (stryCov_9fa48("574"), '19px'),
          lineHeight: stryMutAct_9fa48("575") ? "" : (stryCov_9fa48("575"), '28px')
        })}>
                    Step 5. Add information about your skills
                </Typography>
                {skills.map((value, index) => {
          if (stryMutAct_9fa48("576")) {
            {}
          } else {
            stryCov_9fa48("576");
            return <SkillsTextfield value={value} handleChange={handleSkillsChange} index={index} key={index} />;
          }
        })}
                <Button variant="contained" onClick={handleNewSkill} sx={stryMutAct_9fa48("577") ? {} : (stryCov_9fa48("577"), {
          width: stryMutAct_9fa48("578") ? "" : (stryCov_9fa48("578"), '100%'),
          backgroundColor: stryMutAct_9fa48("579") ? "" : (stryCov_9fa48("579"), '#526ED3'),
          textTransform: stryMutAct_9fa48("580") ? "" : (stryCov_9fa48("580"), 'none'),
          borderRadius: stryMutAct_9fa48("581") ? "" : (stryCov_9fa48("581"), '12px'),
          padding: stryMutAct_9fa48("582") ? "" : (stryCov_9fa48("582"), '16px 70px'),
          marginTop: stryMutAct_9fa48("583") ? "" : (stryCov_9fa48("583"), '24px')
        })}>
                    Add New Skill
                </Button>
            </Box>
            <Box sx={stryMutAct_9fa48("584") ? {} : (stryCov_9fa48("584"), {
        display: stryMutAct_9fa48("585") ? "" : (stryCov_9fa48("585"), 'flex'),
        flexDirection: stryMutAct_9fa48("586") ? "" : (stryCov_9fa48("586"), 'row'),
        justifyContent: stryMutAct_9fa48("587") ? "" : (stryCov_9fa48("587"), 'space-between'),
        mb: stryMutAct_9fa48("588") ? "" : (stryCov_9fa48("588"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("591") ? activeStep !== 0 : stryMutAct_9fa48("590") ? false : stryMutAct_9fa48("589") ? true : (stryCov_9fa48("589", "590", "591"), activeStep === 0)} sx={stryMutAct_9fa48("592") ? {} : (stryCov_9fa48("592"), {
          color: stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), '#526ED3'),
          border: (stryMutAct_9fa48("596") ? activeStep !== 0 : stryMutAct_9fa48("595") ? false : stryMutAct_9fa48("594") ? true : (stryCov_9fa48("594", "595", "596"), activeStep === 0)) ? stryMutAct_9fa48("597") ? "" : (stryCov_9fa48("597"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("598") ? "" : (stryCov_9fa48("598"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("599") ? "" : (stryCov_9fa48("599"), 'none'),
          borderRadius: stryMutAct_9fa48("600") ? "" : (stryCov_9fa48("600"), '12px'),
          padding: stryMutAct_9fa48("601") ? "" : (stryCov_9fa48("601"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("602") ? {} : (stryCov_9fa48("602"), {
          backgroundColor: stryMutAct_9fa48("603") ? "" : (stryCov_9fa48("603"), '#526ED3'),
          textTransform: stryMutAct_9fa48("604") ? "" : (stryCov_9fa48("604"), 'none'),
          borderRadius: stryMutAct_9fa48("605") ? "" : (stryCov_9fa48("605"), '12px'),
          padding: stryMutAct_9fa48("606") ? "" : (stryCov_9fa48("606"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("609") ? activeStep !== steps - 1 : stryMutAct_9fa48("608") ? false : stryMutAct_9fa48("607") ? true : (stryCov_9fa48("607", "608", "609"), activeStep === (stryMutAct_9fa48("610") ? steps + 1 : (stryCov_9fa48("610"), steps - 1)))) ? stryMutAct_9fa48("611") ? "" : (stryCov_9fa48("611"), 'Finish') : stryMutAct_9fa48("612") ? "" : (stryCov_9fa48("612"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};