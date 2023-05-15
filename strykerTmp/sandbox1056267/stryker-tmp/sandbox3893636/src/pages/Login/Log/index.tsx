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
import React, { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../../http";
export const Log: React.FC = () => {
  if (stryMutAct_9fa48("721")) {
    {}
  } else {
    stryCov_9fa48("721");
    const navigate = useNavigate();
    const [email, setEmail] = useState(stryMutAct_9fa48("722") ? "Stryker was here!" : (stryCov_9fa48("722"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("723") ? "Stryker was here!" : (stryCov_9fa48("723"), ''));
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("724")) {
        {}
      } else {
        stryCov_9fa48("724");
        setEmail(e.target.value);
      }
    }, stryMutAct_9fa48("725") ? [] : (stryCov_9fa48("725"), [setEmail]));
    const onChangePass = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("726")) {
        {}
      } else {
        stryCov_9fa48("726");
        setPassword(e.target.value);
      }
    }, stryMutAct_9fa48("727") ? [] : (stryCov_9fa48("727"), [setPassword]));
    const log = useCallback(() => {
      if (stryMutAct_9fa48("728")) {
        {}
      } else {
        stryCov_9fa48("728");
        logIn(email, password).then(r => {
          if (stryMutAct_9fa48("729")) {
            {}
          } else {
            stryCov_9fa48("729");
            if (stryMutAct_9fa48("732") ? r !== 'Request failed with status code 500' || r !== 'Request failed with status code 404' : stryMutAct_9fa48("731") ? false : stryMutAct_9fa48("730") ? true : (stryCov_9fa48("730", "731", "732"), (stryMutAct_9fa48("734") ? r === 'Request failed with status code 500' : stryMutAct_9fa48("733") ? true : (stryCov_9fa48("733", "734"), r !== (stryMutAct_9fa48("735") ? "" : (stryCov_9fa48("735"), 'Request failed with status code 500')))) && (stryMutAct_9fa48("737") ? r === 'Request failed with status code 404' : stryMutAct_9fa48("736") ? true : (stryCov_9fa48("736", "737"), r !== (stryMutAct_9fa48("738") ? "" : (stryCov_9fa48("738"), 'Request failed with status code 404')))))) {
              if (stryMutAct_9fa48("739")) {
                {}
              } else {
                stryCov_9fa48("739");
                navigate(stryMutAct_9fa48("740") ? "" : (stryCov_9fa48("740"), '/'));
              }
            } else {
              if (stryMutAct_9fa48("741")) {
                {}
              } else {
                stryCov_9fa48("741");
                if (stryMutAct_9fa48("744") ? email.trim().length > 0 || password.trim().length > 0 : stryMutAct_9fa48("743") ? false : stryMutAct_9fa48("742") ? true : (stryCov_9fa48("742", "743", "744"), (stryMutAct_9fa48("747") ? email.trim().length <= 0 : stryMutAct_9fa48("746") ? email.trim().length >= 0 : stryMutAct_9fa48("745") ? true : (stryCov_9fa48("745", "746", "747"), (stryMutAct_9fa48("748") ? email.length : (stryCov_9fa48("748"), email.trim().length)) > 0)) && (stryMutAct_9fa48("751") ? password.trim().length <= 0 : stryMutAct_9fa48("750") ? password.trim().length >= 0 : stryMutAct_9fa48("749") ? true : (stryCov_9fa48("749", "750", "751"), (stryMutAct_9fa48("752") ? password.length : (stryCov_9fa48("752"), password.trim().length)) > 0)))) {
                  if (stryMutAct_9fa48("753")) {
                    {}
                  } else {
                    stryCov_9fa48("753");
                    alert(stryMutAct_9fa48("754") ? "" : (stryCov_9fa48("754"), 'Email or password incorrect'));
                  }
                } else {
                  if (stryMutAct_9fa48("755")) {
                    {}
                  } else {
                    stryCov_9fa48("755");
                    alert(stryMutAct_9fa48("756") ? "" : (stryCov_9fa48("756"), 'Fill all the fields please'));
                  }
                }
              }
            }
          }
        });
      }
    }, stryMutAct_9fa48("757") ? [] : (stryCov_9fa48("757"), [email, password, navigate]));
    const reg = stryMutAct_9fa48("758") ? () => undefined : (stryCov_9fa48("758"), (() => {
      const reg = () => navigate(stryMutAct_9fa48("759") ? "" : (stryCov_9fa48("759"), '/register'));
      return reg;
    })());
    return <Box sx={stryMutAct_9fa48("760") ? {} : (stryCov_9fa48("760"), {
      backgroundColor: stryMutAct_9fa48("761") ? "" : (stryCov_9fa48("761"), '#EBEFFF'),
      borderRadius: stryMutAct_9fa48("762") ? "" : (stryCov_9fa48("762"), '20px'),
      p: stryMutAct_9fa48("763") ? {} : (stryCov_9fa48("763"), {
        xs: stryMutAct_9fa48("764") ? "" : (stryCov_9fa48("764"), '24px'),
        sm: stryMutAct_9fa48("765") ? "" : (stryCov_9fa48("765"), '36px'),
        md: stryMutAct_9fa48("766") ? "" : (stryCov_9fa48("766"), '72px')
      }),
      display: stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), 'flex'),
      flexDirection: stryMutAct_9fa48("768") ? {} : (stryCov_9fa48("768"), {
        xs: stryMutAct_9fa48("769") ? "" : (stryCov_9fa48("769"), 'column'),
        sm: stryMutAct_9fa48("770") ? "" : (stryCov_9fa48("770"), 'row')
      }),
      gap: 5
    })}>
            <Box sx={stryMutAct_9fa48("771") ? {} : (stryCov_9fa48("771"), {
        width: stryMutAct_9fa48("772") ? {} : (stryCov_9fa48("772"), {
          xs: stryMutAct_9fa48("773") ? "" : (stryCov_9fa48("773"), '100%'),
          sm: stryMutAct_9fa48("774") ? "" : (stryCov_9fa48("774"), '50%')
        })
      })}>
                <Typography sx={stryMutAct_9fa48("775") ? {} : (stryCov_9fa48("775"), {
          fontFamily: stryMutAct_9fa48("776") ? "" : (stryCov_9fa48("776"), 'ManropeBold'),
          fontWeight: 400,
          fontSize: stryMutAct_9fa48("777") ? "" : (stryCov_9fa48("777"), '48px'),
          lineHeight: stryMutAct_9fa48("778") ? "" : (stryCov_9fa48("778"), '60px'),
          letterSpacing: stryMutAct_9fa48("779") ? "" : (stryCov_9fa48("779"), '0.01em'),
          color: stryMutAct_9fa48("780") ? "" : (stryCov_9fa48("780"), '#1D2023')
        })}>We are happy to see you again</Typography>
                <Typography sx={stryMutAct_9fa48("781") ? {} : (stryCov_9fa48("781"), {
          mt: 3,
          fontFamily: stryMutAct_9fa48("782") ? "" : (stryCov_9fa48("782"), 'Manrope'),
          fontWeight: 400,
          fontSize: stryMutAct_9fa48("783") ? "" : (stryCov_9fa48("783"), '24px'),
          lineHeight: stryMutAct_9fa48("784") ? "" : (stryCov_9fa48("784"), '30px'),
          letterSpacing: stryMutAct_9fa48("785") ? "" : (stryCov_9fa48("785"), '0.01em'),
          color: stryMutAct_9fa48("786") ? "" : (stryCov_9fa48("786"), '#1D2023')
        })}>
                    Fill in the fields and return to your CSV
                </Typography>
            </Box>
            <Box sx={stryMutAct_9fa48("787") ? {} : (stryCov_9fa48("787"), {
        backgroundColor: stryMutAct_9fa48("788") ? "" : (stryCov_9fa48("788"), 'white'),
        boxShadow: stryMutAct_9fa48("789") ? "" : (stryCov_9fa48("789"), '0px 0px 25px rgba(255, 255, 255, 0.25)'),
        borderRadius: stryMutAct_9fa48("790") ? "" : (stryCov_9fa48("790"), '16px'),
        width: stryMutAct_9fa48("791") ? {} : (stryCov_9fa48("791"), {
          xs: stryMutAct_9fa48("792") ? "" : (stryCov_9fa48("792"), '100%'),
          sm: stryMutAct_9fa48("793") ? "" : (stryCov_9fa48("793"), '50%')
        })
      })}>
                <Box sx={stryMutAct_9fa48("794") ? {} : (stryCov_9fa48("794"), {
          p: stryMutAct_9fa48("795") ? {} : (stryCov_9fa48("795"), {
            xs: stryMutAct_9fa48("796") ? "" : (stryCov_9fa48("796"), '16px 16px'),
            md: stryMutAct_9fa48("797") ? "" : (stryCov_9fa48("797"), '72px 82px')
          })
        })}>
                    <TextField onChange={onChangeEmail} placeholder={stryMutAct_9fa48("798") ? "" : (stryCov_9fa48("798"), 'You email')} variant="standard" type="text" inputProps={stryMutAct_9fa48("799") ? {} : (stryCov_9fa48("799"), {
            style: stryMutAct_9fa48("800") ? {} : (stryCov_9fa48("800"), {
              fontFamily: stryMutAct_9fa48("801") ? "" : (stryCov_9fa48("801"), 'Manrope'),
              fontWeight: 400,
              fontSize: stryMutAct_9fa48("802") ? "" : (stryCov_9fa48("802"), '24px'),
              lineHeight: stryMutAct_9fa48("803") ? "" : (stryCov_9fa48("803"), '30px'),
              letterSpacing: stryMutAct_9fa48("804") ? "" : (stryCov_9fa48("804"), '0.01em')
            })
          })} sx={stryMutAct_9fa48("805") ? {} : (stryCov_9fa48("805"), {
            width: stryMutAct_9fa48("806") ? "" : (stryCov_9fa48("806"), '100%'),
            boxShadow: stryMutAct_9fa48("807") ? "" : (stryCov_9fa48("807"), '0px 2px 0px rgba(0, 0, 0, 0.1)'),
            mb: 6
          })} />
                    <TextField onChange={onChangePass} placeholder={stryMutAct_9fa48("808") ? "" : (stryCov_9fa48("808"), 'Your password')} type="password" variant="standard" inputProps={stryMutAct_9fa48("809") ? {} : (stryCov_9fa48("809"), {
            style: stryMutAct_9fa48("810") ? {} : (stryCov_9fa48("810"), {
              fontFamily: stryMutAct_9fa48("811") ? "" : (stryCov_9fa48("811"), 'Manrope'),
              fontWeight: 400,
              fontSize: stryMutAct_9fa48("812") ? "" : (stryCov_9fa48("812"), '24px'),
              lineHeight: stryMutAct_9fa48("813") ? "" : (stryCov_9fa48("813"), '30px'),
              letterSpacing: stryMutAct_9fa48("814") ? "" : (stryCov_9fa48("814"), '0.01em')
            })
          })} sx={stryMutAct_9fa48("815") ? {} : (stryCov_9fa48("815"), {
            width: stryMutAct_9fa48("816") ? "" : (stryCov_9fa48("816"), '100%'),
            boxShadow: stryMutAct_9fa48("817") ? "" : (stryCov_9fa48("817"), '0px 2px 0px rgba(0, 0, 0, 0.1)'),
            mb: 6
          })} />
                    <Button onClick={log} sx={stryMutAct_9fa48("818") ? {} : (stryCov_9fa48("818"), {
            backgroundColor: stryMutAct_9fa48("819") ? "" : (stryCov_9fa48("819"), '#1D2023'),
            borderRadius: stryMutAct_9fa48("820") ? "" : (stryCov_9fa48("820"), '16px'),
            textTransform: stryMutAct_9fa48("821") ? "" : (stryCov_9fa48("821"), 'none'),
            fontFamily: stryMutAct_9fa48("822") ? "" : (stryCov_9fa48("822"), 'Manrope'),
            fontWeight: 400,
            fontSize: stryMutAct_9fa48("823") ? "" : (stryCov_9fa48("823"), '20px'),
            lineHeight: stryMutAct_9fa48("824") ? "" : (stryCov_9fa48("824"), '20px'),
            letterSpacing: stryMutAct_9fa48("825") ? "" : (stryCov_9fa48("825"), '0.01em'),
            color: stryMutAct_9fa48("826") ? "" : (stryCov_9fa48("826"), '#FFFFFF'),
            width: stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), '100%'),
            p: stryMutAct_9fa48("828") ? "" : (stryCov_9fa48("828"), '24px'),
            cursor: stryMutAct_9fa48("829") ? "" : (stryCov_9fa48("829"), 'pointer'),
            '&:hover': stryMutAct_9fa48("830") ? {} : (stryCov_9fa48("830"), {
              background: stryMutAct_9fa48("831") ? "" : (stryCov_9fa48("831"), 'rgb(123, 135, 154)')
            })
          })}>
                        Dive in
                    </Button>
                    <Typography align="center" onClick={reg} sx={stryMutAct_9fa48("832") ? {} : (stryCov_9fa48("832"), {
            cursor: stryMutAct_9fa48("833") ? "" : (stryCov_9fa48("833"), 'pointer'),
            mt: 2,
            fontFamily: stryMutAct_9fa48("834") ? "" : (stryCov_9fa48("834"), 'Manrope'),
            fontWeight: 400,
            fontSize: stryMutAct_9fa48("835") ? "" : (stryCov_9fa48("835"), '16px'),
            lineHeight: stryMutAct_9fa48("836") ? "" : (stryCov_9fa48("836"), '24px'),
            color: stryMutAct_9fa48("837") ? "" : (stryCov_9fa48("837"), '#7B879A')
          })}>
                        Are you new?
                    </Typography>
                </Box>
            </Box>
        </Box>;
  }
};