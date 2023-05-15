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
import { EducationTextfield } from "./EmploymentTextfield";
import { education } from "../../CSV";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  handleNewEmployment: () => void;
  employment: education[];
  handleEmploymentChange: (value: education, index: number) => void;
}
export const Employment: FC<Props> = ({
  employment,
  handleNewEmployment,
  handleEmploymentChange,
  onClickNext,
  onClickBack,
  activeStep,
  steps
}) => {
  if (stryMutAct_9fa48("361")) {
    {}
  } else {
    stryCov_9fa48("361");
    const handleChange = useCallback((type: string, value: string, index: number) => {
      if (stryMutAct_9fa48("362")) {
        {}
      } else {
        stryCov_9fa48("362");
        if (stryMutAct_9fa48("365") ? type !== 'name' : stryMutAct_9fa48("364") ? false : stryMutAct_9fa48("363") ? true : (stryCov_9fa48("363", "364", "365"), type === (stryMutAct_9fa48("366") ? "" : (stryCov_9fa48("366"), 'name')))) {
          if (stryMutAct_9fa48("367")) {
            {}
          } else {
            stryCov_9fa48("367");
            handleEmploymentChange(stryMutAct_9fa48("368") ? {} : (stryCov_9fa48("368"), {
              name: value,
              years: employment[index].years,
              descr: employment[index].descr
            }), index);
          }
        } else if (stryMutAct_9fa48("371") ? type !== 'years' : stryMutAct_9fa48("370") ? false : stryMutAct_9fa48("369") ? true : (stryCov_9fa48("369", "370", "371"), type === (stryMutAct_9fa48("372") ? "" : (stryCov_9fa48("372"), 'years')))) {
          if (stryMutAct_9fa48("373")) {
            {}
          } else {
            stryCov_9fa48("373");
            handleEmploymentChange(stryMutAct_9fa48("374") ? {} : (stryCov_9fa48("374"), {
              name: employment[index].name,
              years: value,
              descr: employment[index].descr
            }), index);
          }
        } else if (stryMutAct_9fa48("377") ? type !== 'descr' : stryMutAct_9fa48("376") ? false : stryMutAct_9fa48("375") ? true : (stryCov_9fa48("375", "376", "377"), type === (stryMutAct_9fa48("378") ? "" : (stryCov_9fa48("378"), 'descr')))) {
          if (stryMutAct_9fa48("379")) {
            {}
          } else {
            stryCov_9fa48("379");
            handleEmploymentChange(stryMutAct_9fa48("380") ? {} : (stryCov_9fa48("380"), {
              name: employment[index].name,
              years: employment[index].years,
              descr: value
            }), index);
          }
        }
      }
    }, stryMutAct_9fa48("381") ? [] : (stryCov_9fa48("381"), [handleEmploymentChange, employment]));
    return <Box sx={stryMutAct_9fa48("382") ? {} : (stryCov_9fa48("382"), {
      height: stryMutAct_9fa48("383") ? "" : (stryCov_9fa48("383"), '100%'),
      display: stryMutAct_9fa48("384") ? "" : (stryCov_9fa48("384"), 'flex'),
      flexDirection: stryMutAct_9fa48("385") ? "" : (stryCov_9fa48("385"), 'column'),
      justifyContent: stryMutAct_9fa48("386") ? "" : (stryCov_9fa48("386"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("387") ? {} : (stryCov_9fa48("387"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("388") ? "" : (stryCov_9fa48("388"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("389") ? "" : (stryCov_9fa48("389"), '19px'),
          lineHeight: stryMutAct_9fa48("390") ? "" : (stryCov_9fa48("390"), '28px')
        })}>
                    Step 4. Add Employment History
                </Typography>
                {employment.map((value, index) => {
          if (stryMutAct_9fa48("391")) {
            {}
          } else {
            stryCov_9fa48("391");
            return <Box sx={stryMutAct_9fa48("392") ? {} : (stryCov_9fa48("392"), {
              mt: 2
            })}>
                            <EducationTextfield type={stryMutAct_9fa48("393") ? "" : (stryCov_9fa48("393"), 'name')} value={value.name} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={stryMutAct_9fa48("394") ? "" : (stryCov_9fa48("394"), 'years')} value={value.years} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={stryMutAct_9fa48("395") ? "" : (stryCov_9fa48("395"), 'descr')} value={value.descr} handleChange={handleChange} index={index} key={index} />
                        </Box>;
          }
        })}
                <Button variant="contained" onClick={handleNewEmployment} sx={stryMutAct_9fa48("396") ? {} : (stryCov_9fa48("396"), {
          width: stryMutAct_9fa48("397") ? "" : (stryCov_9fa48("397"), '100%'),
          backgroundColor: stryMutAct_9fa48("398") ? "" : (stryCov_9fa48("398"), '#526ED3'),
          textTransform: stryMutAct_9fa48("399") ? "" : (stryCov_9fa48("399"), 'none'),
          borderRadius: stryMutAct_9fa48("400") ? "" : (stryCov_9fa48("400"), '12px'),
          padding: stryMutAct_9fa48("401") ? "" : (stryCov_9fa48("401"), '16px 70px'),
          marginTop: stryMutAct_9fa48("402") ? "" : (stryCov_9fa48("402"), '24px')
        })}>
                    Add Employment
                </Button>
            </Box>
            <Box sx={stryMutAct_9fa48("403") ? {} : (stryCov_9fa48("403"), {
        display: stryMutAct_9fa48("404") ? "" : (stryCov_9fa48("404"), 'flex'),
        flexDirection: stryMutAct_9fa48("405") ? "" : (stryCov_9fa48("405"), 'row'),
        justifyContent: stryMutAct_9fa48("406") ? "" : (stryCov_9fa48("406"), 'space-between'),
        mb: stryMutAct_9fa48("407") ? "" : (stryCov_9fa48("407"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("410") ? activeStep !== 0 : stryMutAct_9fa48("409") ? false : stryMutAct_9fa48("408") ? true : (stryCov_9fa48("408", "409", "410"), activeStep === 0)} sx={stryMutAct_9fa48("411") ? {} : (stryCov_9fa48("411"), {
          color: stryMutAct_9fa48("412") ? "" : (stryCov_9fa48("412"), '#526ED3'),
          border: (stryMutAct_9fa48("415") ? activeStep !== 0 : stryMutAct_9fa48("414") ? false : stryMutAct_9fa48("413") ? true : (stryCov_9fa48("413", "414", "415"), activeStep === 0)) ? stryMutAct_9fa48("416") ? "" : (stryCov_9fa48("416"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("417") ? "" : (stryCov_9fa48("417"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("418") ? "" : (stryCov_9fa48("418"), 'none'),
          borderRadius: stryMutAct_9fa48("419") ? "" : (stryCov_9fa48("419"), '12px'),
          padding: stryMutAct_9fa48("420") ? "" : (stryCov_9fa48("420"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("421") ? {} : (stryCov_9fa48("421"), {
          backgroundColor: stryMutAct_9fa48("422") ? "" : (stryCov_9fa48("422"), '#526ED3'),
          textTransform: stryMutAct_9fa48("423") ? "" : (stryCov_9fa48("423"), 'none'),
          borderRadius: stryMutAct_9fa48("424") ? "" : (stryCov_9fa48("424"), '12px'),
          padding: stryMutAct_9fa48("425") ? "" : (stryCov_9fa48("425"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("428") ? activeStep !== steps - 1 : stryMutAct_9fa48("427") ? false : stryMutAct_9fa48("426") ? true : (stryCov_9fa48("426", "427", "428"), activeStep === (stryMutAct_9fa48("429") ? steps + 1 : (stryCov_9fa48("429"), steps - 1)))) ? stryMutAct_9fa48("430") ? "" : (stryCov_9fa48("430"), 'Finish') : stryMutAct_9fa48("431") ? "" : (stryCov_9fa48("431"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};