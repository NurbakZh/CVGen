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
import React, { type FC, useCallback, useState } from 'react';
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  profile: string;
  handleProfileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Profile: FC<Props> = ({
  profile,
  handleProfileChange,
  onClickNext,
  onClickBack,
  activeStep,
  steps
}) => {
  if (stryMutAct_9fa48("497")) {
    {}
  } else {
    stryCov_9fa48("497");
    return <Box sx={stryMutAct_9fa48("498") ? {} : (stryCov_9fa48("498"), {
      height: stryMutAct_9fa48("499") ? "" : (stryCov_9fa48("499"), '100%'),
      display: stryMutAct_9fa48("500") ? "" : (stryCov_9fa48("500"), 'flex'),
      flexDirection: stryMutAct_9fa48("501") ? "" : (stryCov_9fa48("501"), 'column'),
      justifyContent: stryMutAct_9fa48("502") ? "" : (stryCov_9fa48("502"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("503") ? {} : (stryCov_9fa48("503"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("504") ? "" : (stryCov_9fa48("504"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("505") ? "" : (stryCov_9fa48("505"), '19px'),
          lineHeight: stryMutAct_9fa48("506") ? "" : (stryCov_9fa48("506"), '28px')
        })}>
                    Step 2. Profile
                </Typography>
                <TextField inputProps={stryMutAct_9fa48("507") ? {} : (stryCov_9fa48("507"), {
          maxLength: 600,
          style: stryMutAct_9fa48("508") ? {} : (stryCov_9fa48("508"), {
            fontFamily: stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), 'Manrope')
          })
        })} FormHelperTextProps={stryMutAct_9fa48("510") ? {} : (stryCov_9fa48("510"), {
          style: stryMutAct_9fa48("511") ? {} : (stryCov_9fa48("511"), {
            alignSelf: stryMutAct_9fa48("512") ? "" : (stryCov_9fa48("512"), 'end')
          })
        })} helperText={stryMutAct_9fa48("513") ? `` : (stryCov_9fa48("513"), `${profile.length}/${600}`)} multiline rows={3} sx={stryMutAct_9fa48("514") ? {} : (stryCov_9fa48("514"), {
          mt: 3,
          width: stryMutAct_9fa48("515") ? "" : (stryCov_9fa48("515"), '100%'),
          '& .MuiInputBase-root': stryMutAct_9fa48("516") ? {} : (stryCov_9fa48("516"), {
            background: stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), 'white'),
            borderRadius: stryMutAct_9fa48("518") ? "" : (stryCov_9fa48("518"), '12px')
          })
        })} value={profile} label="Profile" onChange={handleProfileChange} />
            </Box>
            <Box sx={stryMutAct_9fa48("519") ? {} : (stryCov_9fa48("519"), {
        display: stryMutAct_9fa48("520") ? "" : (stryCov_9fa48("520"), 'flex'),
        flexDirection: stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), 'row'),
        justifyContent: stryMutAct_9fa48("522") ? "" : (stryCov_9fa48("522"), 'space-between'),
        mb: stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("526") ? activeStep !== 0 : stryMutAct_9fa48("525") ? false : stryMutAct_9fa48("524") ? true : (stryCov_9fa48("524", "525", "526"), activeStep === 0)} sx={stryMutAct_9fa48("527") ? {} : (stryCov_9fa48("527"), {
          color: stryMutAct_9fa48("528") ? "" : (stryCov_9fa48("528"), '#526ED3'),
          border: (stryMutAct_9fa48("531") ? activeStep !== 0 : stryMutAct_9fa48("530") ? false : stryMutAct_9fa48("529") ? true : (stryCov_9fa48("529", "530", "531"), activeStep === 0)) ? stryMutAct_9fa48("532") ? "" : (stryCov_9fa48("532"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'none'),
          borderRadius: stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), '12px'),
          padding: stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("537") ? {} : (stryCov_9fa48("537"), {
          backgroundColor: stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), '#526ED3'),
          textTransform: stryMutAct_9fa48("539") ? "" : (stryCov_9fa48("539"), 'none'),
          borderRadius: stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), '12px'),
          padding: stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("544") ? activeStep !== steps - 1 : stryMutAct_9fa48("543") ? false : stryMutAct_9fa48("542") ? true : (stryCov_9fa48("542", "543", "544"), activeStep === (stryMutAct_9fa48("545") ? steps + 1 : (stryCov_9fa48("545"), steps - 1)))) ? stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), 'Finish') : stryMutAct_9fa48("547") ? "" : (stryCov_9fa48("547"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};