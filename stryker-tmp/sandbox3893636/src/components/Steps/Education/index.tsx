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
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { EducationTextfield } from "./EducationTextfield";
import { education } from "../../CSV";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  handleNewEdu: () => void;
  education: education[];
  handleEduChange: (value: education, index: number) => void;
}
export const Education: FC<Props> = ({
  education,
  handleEduChange,
  handleNewEdu,
  onClickNext,
  onClickBack,
  activeStep,
  steps
}) => {
  if (stryMutAct_9fa48("253")) {
    {}
  } else {
    stryCov_9fa48("253");
    const handleChange = useCallback((type: string, value: string, index: number) => {
      if (stryMutAct_9fa48("254")) {
        {}
      } else {
        stryCov_9fa48("254");
        if (stryMutAct_9fa48("257") ? type !== 'name' : stryMutAct_9fa48("256") ? false : stryMutAct_9fa48("255") ? true : (stryCov_9fa48("255", "256", "257"), type === (stryMutAct_9fa48("258") ? "" : (stryCov_9fa48("258"), 'name')))) {
          if (stryMutAct_9fa48("259")) {
            {}
          } else {
            stryCov_9fa48("259");
            handleEduChange(stryMutAct_9fa48("260") ? {} : (stryCov_9fa48("260"), {
              name: value,
              years: education[index].years,
              descr: education[index].descr
            }), index);
          }
        } else if (stryMutAct_9fa48("263") ? type !== 'years' : stryMutAct_9fa48("262") ? false : stryMutAct_9fa48("261") ? true : (stryCov_9fa48("261", "262", "263"), type === (stryMutAct_9fa48("264") ? "" : (stryCov_9fa48("264"), 'years')))) {
          if (stryMutAct_9fa48("265")) {
            {}
          } else {
            stryCov_9fa48("265");
            handleEduChange(stryMutAct_9fa48("266") ? {} : (stryCov_9fa48("266"), {
              name: education[index].name,
              years: value,
              descr: education[index].descr
            }), index);
          }
        } else if (stryMutAct_9fa48("269") ? type !== 'descr' : stryMutAct_9fa48("268") ? false : stryMutAct_9fa48("267") ? true : (stryCov_9fa48("267", "268", "269"), type === (stryMutAct_9fa48("270") ? "" : (stryCov_9fa48("270"), 'descr')))) {
          if (stryMutAct_9fa48("271")) {
            {}
          } else {
            stryCov_9fa48("271");
            handleEduChange(stryMutAct_9fa48("272") ? {} : (stryCov_9fa48("272"), {
              name: education[index].name,
              years: education[index].years,
              descr: value
            }), index);
          }
        }
      }
    }, stryMutAct_9fa48("273") ? [] : (stryCov_9fa48("273"), [education, handleEduChange]));
    return <Box sx={stryMutAct_9fa48("274") ? {} : (stryCov_9fa48("274"), {
      height: stryMutAct_9fa48("275") ? "" : (stryCov_9fa48("275"), '100%'),
      display: stryMutAct_9fa48("276") ? "" : (stryCov_9fa48("276"), 'flex'),
      flexDirection: stryMutAct_9fa48("277") ? "" : (stryCov_9fa48("277"), 'column'),
      justifyContent: stryMutAct_9fa48("278") ? "" : (stryCov_9fa48("278"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("279") ? {} : (stryCov_9fa48("279"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("280") ? "" : (stryCov_9fa48("280"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("281") ? "" : (stryCov_9fa48("281"), '19px'),
          lineHeight: stryMutAct_9fa48("282") ? "" : (stryCov_9fa48("282"), '28px')
        })}>
                    Step 3. Add Education History
                </Typography>
                {education.map((value, index) => {
          if (stryMutAct_9fa48("283")) {
            {}
          } else {
            stryCov_9fa48("283");
            return <Box sx={stryMutAct_9fa48("284") ? {} : (stryCov_9fa48("284"), {
              mt: 2
            })}>
                            <EducationTextfield type={stryMutAct_9fa48("285") ? "" : (stryCov_9fa48("285"), 'name')} value={value.name} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={stryMutAct_9fa48("286") ? "" : (stryCov_9fa48("286"), 'years')} value={value.years} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={stryMutAct_9fa48("287") ? "" : (stryCov_9fa48("287"), 'descr')} value={value.descr} handleChange={handleChange} index={index} key={index} />
                        </Box>;
          }
        })}
                <Button variant="contained" onClick={handleNewEdu} sx={stryMutAct_9fa48("288") ? {} : (stryCov_9fa48("288"), {
          width: stryMutAct_9fa48("289") ? "" : (stryCov_9fa48("289"), '100%'),
          backgroundColor: stryMutAct_9fa48("290") ? "" : (stryCov_9fa48("290"), '#526ED3'),
          textTransform: stryMutAct_9fa48("291") ? "" : (stryCov_9fa48("291"), 'none'),
          borderRadius: stryMutAct_9fa48("292") ? "" : (stryCov_9fa48("292"), '12px'),
          padding: stryMutAct_9fa48("293") ? "" : (stryCov_9fa48("293"), '16px 70px'),
          marginTop: stryMutAct_9fa48("294") ? "" : (stryCov_9fa48("294"), '24px')
        })}>
                    Add Education
                </Button>
            </Box>
            <Box sx={stryMutAct_9fa48("295") ? {} : (stryCov_9fa48("295"), {
        display: stryMutAct_9fa48("296") ? "" : (stryCov_9fa48("296"), 'flex'),
        flexDirection: stryMutAct_9fa48("297") ? "" : (stryCov_9fa48("297"), 'row'),
        justifyContent: stryMutAct_9fa48("298") ? "" : (stryCov_9fa48("298"), 'space-between'),
        mb: stryMutAct_9fa48("299") ? "" : (stryCov_9fa48("299"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("302") ? activeStep !== 0 : stryMutAct_9fa48("301") ? false : stryMutAct_9fa48("300") ? true : (stryCov_9fa48("300", "301", "302"), activeStep === 0)} sx={stryMutAct_9fa48("303") ? {} : (stryCov_9fa48("303"), {
          color: stryMutAct_9fa48("304") ? "" : (stryCov_9fa48("304"), '#526ED3'),
          border: (stryMutAct_9fa48("307") ? activeStep !== 0 : stryMutAct_9fa48("306") ? false : stryMutAct_9fa48("305") ? true : (stryCov_9fa48("305", "306", "307"), activeStep === 0)) ? stryMutAct_9fa48("308") ? "" : (stryCov_9fa48("308"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("309") ? "" : (stryCov_9fa48("309"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("310") ? "" : (stryCov_9fa48("310"), 'none'),
          borderRadius: stryMutAct_9fa48("311") ? "" : (stryCov_9fa48("311"), '12px'),
          padding: stryMutAct_9fa48("312") ? "" : (stryCov_9fa48("312"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("313") ? {} : (stryCov_9fa48("313"), {
          backgroundColor: stryMutAct_9fa48("314") ? "" : (stryCov_9fa48("314"), '#526ED3'),
          textTransform: stryMutAct_9fa48("315") ? "" : (stryCov_9fa48("315"), 'none'),
          borderRadius: stryMutAct_9fa48("316") ? "" : (stryCov_9fa48("316"), '12px'),
          padding: stryMutAct_9fa48("317") ? "" : (stryCov_9fa48("317"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("320") ? activeStep !== steps - 1 : stryMutAct_9fa48("319") ? false : stryMutAct_9fa48("318") ? true : (stryCov_9fa48("318", "319", "320"), activeStep === (stryMutAct_9fa48("321") ? steps + 1 : (stryCov_9fa48("321"), steps - 1)))) ? stryMutAct_9fa48("322") ? "" : (stryCov_9fa48("322"), 'Finish') : stryMutAct_9fa48("323") ? "" : (stryCov_9fa48("323"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};