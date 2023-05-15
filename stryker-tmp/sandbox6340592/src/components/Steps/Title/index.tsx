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
import { Box, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
interface Props {
  onClickNext: () => void;
  onClickBack: () => void;
  activeStep: number;
  steps: number;
  title: string;
  decsr: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDescrChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Title: FC<Props> = ({
  onClickNext,
  onClickBack,
  activeStep,
  steps,
  title,
  decsr,
  handleTitleChange,
  handleDescrChange
}) => {
  if (stryMutAct_9fa48("613")) {
    {}
  } else {
    stryCov_9fa48("613");
    return <Box sx={stryMutAct_9fa48("614") ? {} : (stryCov_9fa48("614"), {
      height: stryMutAct_9fa48("615") ? "" : (stryCov_9fa48("615"), '100%'),
      display: stryMutAct_9fa48("616") ? "" : (stryCov_9fa48("616"), 'flex'),
      flexDirection: stryMutAct_9fa48("617") ? "" : (stryCov_9fa48("617"), 'column'),
      justifyContent: stryMutAct_9fa48("618") ? "" : (stryCov_9fa48("618"), 'space-between')
    })}>
            <Box>
                <Typography sx={stryMutAct_9fa48("619") ? {} : (stryCov_9fa48("619"), {
          mt: 5,
          fontFamily: stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), 'Manrope'),
          fontWeight: 500,
          fontSize: stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), '19px'),
          lineHeight: stryMutAct_9fa48("622") ? "" : (stryCov_9fa48("622"), '28px')
        })}>
                    Step 1. Enter the title & brief description
                </Typography>
                <TextField inputProps={stryMutAct_9fa48("623") ? {} : (stryCov_9fa48("623"), {
          maxLength: 200,
          style: stryMutAct_9fa48("624") ? {} : (stryCov_9fa48("624"), {
            fontFamily: stryMutAct_9fa48("625") ? "" : (stryCov_9fa48("625"), 'Manrope')
          })
        })} FormHelperTextProps={stryMutAct_9fa48("626") ? {} : (stryCov_9fa48("626"), {
          style: stryMutAct_9fa48("627") ? {} : (stryCov_9fa48("627"), {
            alignSelf: stryMutAct_9fa48("628") ? "" : (stryCov_9fa48("628"), 'end')
          })
        })} helperText={stryMutAct_9fa48("629") ? `` : (stryCov_9fa48("629"), `${title.length}/${200}`)} sx={stryMutAct_9fa48("630") ? {} : (stryCov_9fa48("630"), {
          mt: 3,
          width: stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), '100%'),
          '& .MuiInputBase-root': stryMutAct_9fa48("632") ? {} : (stryCov_9fa48("632"), {
            background: stryMutAct_9fa48("633") ? "" : (stryCov_9fa48("633"), 'white'),
            borderRadius: stryMutAct_9fa48("634") ? "" : (stryCov_9fa48("634"), '12px')
          })
        })} value={title} label="Title" onChange={handleTitleChange} />
                <TextField inputProps={stryMutAct_9fa48("635") ? {} : (stryCov_9fa48("635"), {
          maxLength: 800,
          style: stryMutAct_9fa48("636") ? {} : (stryCov_9fa48("636"), {
            fontFamily: stryMutAct_9fa48("637") ? "" : (stryCov_9fa48("637"), 'Manrope')
          })
        })} FormHelperTextProps={stryMutAct_9fa48("638") ? {} : (stryCov_9fa48("638"), {
          style: stryMutAct_9fa48("639") ? {} : (stryCov_9fa48("639"), {
            alignSelf: stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), 'end')
          })
        })} value={decsr} helperText={stryMutAct_9fa48("641") ? `` : (stryCov_9fa48("641"), `${decsr.length}/${800}`)} sx={stryMutAct_9fa48("642") ? {} : (stryCov_9fa48("642"), {
          mt: 3,
          width: stryMutAct_9fa48("643") ? "" : (stryCov_9fa48("643"), '100%'),
          '& .MuiInputBase-root': stryMutAct_9fa48("644") ? {} : (stryCov_9fa48("644"), {
            background: stryMutAct_9fa48("645") ? "" : (stryCov_9fa48("645"), 'white'),
            borderRadius: stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646"), '12px')
          })
        })} multiline rows={3} label="Brief Description" onChange={handleDescrChange} />
            </Box>
            <Box sx={stryMutAct_9fa48("647") ? {} : (stryCov_9fa48("647"), {
        display: stryMutAct_9fa48("648") ? "" : (stryCov_9fa48("648"), 'flex'),
        flexDirection: stryMutAct_9fa48("649") ? "" : (stryCov_9fa48("649"), 'row'),
        justifyContent: stryMutAct_9fa48("650") ? "" : (stryCov_9fa48("650"), 'space-between'),
        mb: stryMutAct_9fa48("651") ? "" : (stryCov_9fa48("651"), '30px')
      })}>
                <Button onClick={onClickBack} disabled={stryMutAct_9fa48("654") ? activeStep !== 0 : stryMutAct_9fa48("653") ? false : stryMutAct_9fa48("652") ? true : (stryCov_9fa48("652", "653", "654"), activeStep === 0)} sx={stryMutAct_9fa48("655") ? {} : (stryCov_9fa48("655"), {
          color: stryMutAct_9fa48("656") ? "" : (stryCov_9fa48("656"), '#526ED3'),
          border: (stryMutAct_9fa48("659") ? activeStep !== 0 : stryMutAct_9fa48("658") ? false : stryMutAct_9fa48("657") ? true : (stryCov_9fa48("657", "658", "659"), activeStep === 0)) ? stryMutAct_9fa48("660") ? "" : (stryCov_9fa48("660"), '1px solid rgba(0, 0, 0, 0.38)') : stryMutAct_9fa48("661") ? "" : (stryCov_9fa48("661"), '1px solid #526ED3'),
          textTransform: stryMutAct_9fa48("662") ? "" : (stryCov_9fa48("662"), 'none'),
          borderRadius: stryMutAct_9fa48("663") ? "" : (stryCov_9fa48("663"), '12px'),
          padding: stryMutAct_9fa48("664") ? "" : (stryCov_9fa48("664"), '16px 70px')
        })}>
                    Back
                </Button>
                <Button variant="contained" onClick={onClickNext} sx={stryMutAct_9fa48("665") ? {} : (stryCov_9fa48("665"), {
          backgroundColor: stryMutAct_9fa48("666") ? "" : (stryCov_9fa48("666"), '#526ED3'),
          textTransform: stryMutAct_9fa48("667") ? "" : (stryCov_9fa48("667"), 'none'),
          borderRadius: stryMutAct_9fa48("668") ? "" : (stryCov_9fa48("668"), '12px'),
          padding: stryMutAct_9fa48("669") ? "" : (stryCov_9fa48("669"), '16px 70px')
        })}>
                    {(stryMutAct_9fa48("672") ? activeStep !== steps - 1 : stryMutAct_9fa48("671") ? false : stryMutAct_9fa48("670") ? true : (stryCov_9fa48("670", "671", "672"), activeStep === (stryMutAct_9fa48("673") ? steps + 1 : (stryCov_9fa48("673"), steps - 1)))) ? stryMutAct_9fa48("674") ? "" : (stryCov_9fa48("674"), 'Finish') : stryMutAct_9fa48("675") ? "" : (stryCov_9fa48("675"), 'Continue')}
                </Button>
            </Box>
        </Box>;
  }
};