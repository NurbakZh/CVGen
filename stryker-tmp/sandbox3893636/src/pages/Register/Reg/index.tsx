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
import { register } from "../../../http";
export const Reg: React.FC = () => {
  if (stryMutAct_9fa48("851")) {
    {}
  } else {
    stryCov_9fa48("851");
    const [name, setName] = useState(stryMutAct_9fa48("852") ? "Stryker was here!" : (stryCov_9fa48("852"), ''));
    const [email, setEmail] = useState(stryMutAct_9fa48("853") ? "Stryker was here!" : (stryCov_9fa48("853"), ''));
    const [password, setPassword] = useState(stryMutAct_9fa48("854") ? "Stryker was here!" : (stryCov_9fa48("854"), ''));
    const navigate = useNavigate();
    const log = stryMutAct_9fa48("855") ? () => undefined : (stryCov_9fa48("855"), (() => {
      const log = () => navigate(stryMutAct_9fa48("856") ? "" : (stryCov_9fa48("856"), '/login'));
      return log;
    })());
    const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("857")) {
        {}
      } else {
        stryCov_9fa48("857");
        setName(e.target.value);
      }
    }, stryMutAct_9fa48("858") ? [] : (stryCov_9fa48("858"), [setName]));
    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("859")) {
        {}
      } else {
        stryCov_9fa48("859");
        setEmail(e.target.value);
      }
    }, stryMutAct_9fa48("860") ? [] : (stryCov_9fa48("860"), [setEmail]));
    const onChangePass = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("861")) {
        {}
      } else {
        stryCov_9fa48("861");
        setPassword(e.target.value);
      }
    }, stryMutAct_9fa48("862") ? [] : (stryCov_9fa48("862"), [setPassword]));
    const reg = useCallback(() => {
      if (stryMutAct_9fa48("863")) {
        {}
      } else {
        stryCov_9fa48("863");
        register(email, name, password).then(r => {
          if (stryMutAct_9fa48("864")) {
            {}
          } else {
            stryCov_9fa48("864");
            if (stryMutAct_9fa48("867") ? r !== 'Request failed with status code 500' || r !== 'Request failed with status code 404' : stryMutAct_9fa48("866") ? false : stryMutAct_9fa48("865") ? true : (stryCov_9fa48("865", "866", "867"), (stryMutAct_9fa48("869") ? r === 'Request failed with status code 500' : stryMutAct_9fa48("868") ? true : (stryCov_9fa48("868", "869"), r !== (stryMutAct_9fa48("870") ? "" : (stryCov_9fa48("870"), 'Request failed with status code 500')))) && (stryMutAct_9fa48("872") ? r === 'Request failed with status code 404' : stryMutAct_9fa48("871") ? true : (stryCov_9fa48("871", "872"), r !== (stryMutAct_9fa48("873") ? "" : (stryCov_9fa48("873"), 'Request failed with status code 404')))))) {
              if (stryMutAct_9fa48("874")) {
                {}
              } else {
                stryCov_9fa48("874");
                navigate(stryMutAct_9fa48("875") ? "" : (stryCov_9fa48("875"), '/login'));
              }
            } else {
              if (stryMutAct_9fa48("876")) {
                {}
              } else {
                stryCov_9fa48("876");
                if (stryMutAct_9fa48("879") ? name.trim().length > 0 && email.trim().length > 0 || password.trim().length > 0 : stryMutAct_9fa48("878") ? false : stryMutAct_9fa48("877") ? true : (stryCov_9fa48("877", "878", "879"), (stryMutAct_9fa48("881") ? name.trim().length > 0 || email.trim().length > 0 : stryMutAct_9fa48("880") ? true : (stryCov_9fa48("880", "881"), (stryMutAct_9fa48("884") ? name.trim().length <= 0 : stryMutAct_9fa48("883") ? name.trim().length >= 0 : stryMutAct_9fa48("882") ? true : (stryCov_9fa48("882", "883", "884"), (stryMutAct_9fa48("885") ? name.length : (stryCov_9fa48("885"), name.trim().length)) > 0)) && (stryMutAct_9fa48("888") ? email.trim().length <= 0 : stryMutAct_9fa48("887") ? email.trim().length >= 0 : stryMutAct_9fa48("886") ? true : (stryCov_9fa48("886", "887", "888"), (stryMutAct_9fa48("889") ? email.length : (stryCov_9fa48("889"), email.trim().length)) > 0)))) && (stryMutAct_9fa48("892") ? password.trim().length <= 0 : stryMutAct_9fa48("891") ? password.trim().length >= 0 : stryMutAct_9fa48("890") ? true : (stryCov_9fa48("890", "891", "892"), (stryMutAct_9fa48("893") ? password.length : (stryCov_9fa48("893"), password.trim().length)) > 0)))) {
                  if (stryMutAct_9fa48("894")) {
                    {}
                  } else {
                    stryCov_9fa48("894");
                    alert(stryMutAct_9fa48("895") ? "" : (stryCov_9fa48("895"), 'We already have such user'));
                  }
                } else {
                  if (stryMutAct_9fa48("896")) {
                    {}
                  } else {
                    stryCov_9fa48("896");
                    alert(stryMutAct_9fa48("897") ? "" : (stryCov_9fa48("897"), 'Fill all the fields'));
                  }
                }
              }
            }
          }
        });
      }
    }, stryMutAct_9fa48("898") ? [] : (stryCov_9fa48("898"), [name, email, password, navigate]));
    return <Box sx={stryMutAct_9fa48("899") ? {} : (stryCov_9fa48("899"), {
      backgroundColor: stryMutAct_9fa48("900") ? "" : (stryCov_9fa48("900"), '#EBEFFF'),
      borderRadius: stryMutAct_9fa48("901") ? "" : (stryCov_9fa48("901"), '20px'),
      p: stryMutAct_9fa48("902") ? {} : (stryCov_9fa48("902"), {
        xs: stryMutAct_9fa48("903") ? "" : (stryCov_9fa48("903"), '24px'),
        sm: stryMutAct_9fa48("904") ? "" : (stryCov_9fa48("904"), '36px'),
        md: stryMutAct_9fa48("905") ? "" : (stryCov_9fa48("905"), '72px')
      }),
      display: stryMutAct_9fa48("906") ? "" : (stryCov_9fa48("906"), 'flex'),
      flexDirection: stryMutAct_9fa48("907") ? {} : (stryCov_9fa48("907"), {
        xs: stryMutAct_9fa48("908") ? "" : (stryCov_9fa48("908"), 'column'),
        sm: stryMutAct_9fa48("909") ? "" : (stryCov_9fa48("909"), 'row')
      }),
      gap: 5
    })}>
            <Box sx={stryMutAct_9fa48("910") ? {} : (stryCov_9fa48("910"), {
        width: stryMutAct_9fa48("911") ? {} : (stryCov_9fa48("911"), {
          xs: stryMutAct_9fa48("912") ? "" : (stryCov_9fa48("912"), '100%'),
          sm: stryMutAct_9fa48("913") ? "" : (stryCov_9fa48("913"), '50%')
        })
      })}>
                <Typography sx={stryMutAct_9fa48("914") ? {} : (stryCov_9fa48("914"), {
          fontFamily: stryMutAct_9fa48("915") ? "" : (stryCov_9fa48("915"), 'ManropeBold'),
          fontWeight: 400,
          fontSize: stryMutAct_9fa48("916") ? "" : (stryCov_9fa48("916"), '48px'),
          lineHeight: stryMutAct_9fa48("917") ? "" : (stryCov_9fa48("917"), '60px'),
          letterSpacing: stryMutAct_9fa48("918") ? "" : (stryCov_9fa48("918"), '0.01em'),
          color: stryMutAct_9fa48("919") ? "" : (stryCov_9fa48("919"), '#1D2023')
        })}>Hello!</Typography>
                <Typography sx={stryMutAct_9fa48("920") ? {} : (stryCov_9fa48("920"), {
          mt: 3,
          fontFamily: stryMutAct_9fa48("921") ? "" : (stryCov_9fa48("921"), 'Manrope'),
          fontWeight: 400,
          fontSize: stryMutAct_9fa48("922") ? "" : (stryCov_9fa48("922"), '24px'),
          lineHeight: stryMutAct_9fa48("923") ? "" : (stryCov_9fa48("923"), '30px'),
          letterSpacing: stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), '0.01em'),
          color: stryMutAct_9fa48("925") ? "" : (stryCov_9fa48("925"), '#1D2023')
        })}>
                    Fill all the fields and start creating your CSV
                </Typography>
            </Box>
            <Box sx={stryMutAct_9fa48("926") ? {} : (stryCov_9fa48("926"), {
        backgroundColor: stryMutAct_9fa48("927") ? "" : (stryCov_9fa48("927"), 'white'),
        boxShadow: stryMutAct_9fa48("928") ? "" : (stryCov_9fa48("928"), '0px 0px 25px rgba(255, 255, 255, 0.25)'),
        borderRadius: stryMutAct_9fa48("929") ? "" : (stryCov_9fa48("929"), '16px'),
        width: stryMutAct_9fa48("930") ? {} : (stryCov_9fa48("930"), {
          xs: stryMutAct_9fa48("931") ? "" : (stryCov_9fa48("931"), '100%'),
          sm: stryMutAct_9fa48("932") ? "" : (stryCov_9fa48("932"), '50%')
        })
      })}>
                <Box sx={stryMutAct_9fa48("933") ? {} : (stryCov_9fa48("933"), {
          p: stryMutAct_9fa48("934") ? {} : (stryCov_9fa48("934"), {
            xs: stryMutAct_9fa48("935") ? "" : (stryCov_9fa48("935"), '16px 16px'),
            md: stryMutAct_9fa48("936") ? "" : (stryCov_9fa48("936"), '72px 82px')
          })
        })}>
                    <TextField onChange={onChangeEmail} placeholder={stryMutAct_9fa48("937") ? "" : (stryCov_9fa48("937"), 'Your email')} variant="standard" type="text" inputProps={stryMutAct_9fa48("938") ? {} : (stryCov_9fa48("938"), {
            style: stryMutAct_9fa48("939") ? {} : (stryCov_9fa48("939"), {
              fontFamily: stryMutAct_9fa48("940") ? "" : (stryCov_9fa48("940"), 'Manrope'),
              fontWeight: 400,
              fontSize: stryMutAct_9fa48("941") ? "" : (stryCov_9fa48("941"), '24px'),
              lineHeight: stryMutAct_9fa48("942") ? "" : (stryCov_9fa48("942"), '30px'),
              letterSpacing: stryMutAct_9fa48("943") ? "" : (stryCov_9fa48("943"), '0.01em')
            })
          })} sx={stryMutAct_9fa48("944") ? {} : (stryCov_9fa48("944"), {
            width: stryMutAct_9fa48("945") ? "" : (stryCov_9fa48("945"), '100%'),
            boxShadow: stryMutAct_9fa48("946") ? "" : (stryCov_9fa48("946"), '0px 2px 0px rgba(0, 0, 0, 0.1)'),
            mb: 6
          })} />
                    <TextField onChange={onChangeName} placeholder={stryMutAct_9fa48("947") ? "" : (stryCov_9fa48("947"), 'Your name')} variant="standard" type="text" inputProps={stryMutAct_9fa48("948") ? {} : (stryCov_9fa48("948"), {
            style: stryMutAct_9fa48("949") ? {} : (stryCov_9fa48("949"), {
              fontFamily: stryMutAct_9fa48("950") ? "" : (stryCov_9fa48("950"), 'Manrope'),
              fontWeight: 400,
              fontSize: stryMutAct_9fa48("951") ? "" : (stryCov_9fa48("951"), '24px'),
              lineHeight: stryMutAct_9fa48("952") ? "" : (stryCov_9fa48("952"), '30px'),
              letterSpacing: stryMutAct_9fa48("953") ? "" : (stryCov_9fa48("953"), '0.01em')
            })
          })} sx={stryMutAct_9fa48("954") ? {} : (stryCov_9fa48("954"), {
            width: stryMutAct_9fa48("955") ? "" : (stryCov_9fa48("955"), '100%'),
            boxShadow: stryMutAct_9fa48("956") ? "" : (stryCov_9fa48("956"), '0px 2px 0px rgba(0, 0, 0, 0.1)'),
            mb: 6
          })} />
                    <TextField onChange={onChangePass} placeholder={stryMutAct_9fa48("957") ? "" : (stryCov_9fa48("957"), 'Your password')} type="password" variant="standard" inputProps={stryMutAct_9fa48("958") ? {} : (stryCov_9fa48("958"), {
            style: stryMutAct_9fa48("959") ? {} : (stryCov_9fa48("959"), {
              fontFamily: stryMutAct_9fa48("960") ? "" : (stryCov_9fa48("960"), 'Manrope'),
              fontWeight: 400,
              fontSize: stryMutAct_9fa48("961") ? "" : (stryCov_9fa48("961"), '24px'),
              lineHeight: stryMutAct_9fa48("962") ? "" : (stryCov_9fa48("962"), '30px'),
              letterSpacing: stryMutAct_9fa48("963") ? "" : (stryCov_9fa48("963"), '0.01em')
            })
          })} sx={stryMutAct_9fa48("964") ? {} : (stryCov_9fa48("964"), {
            width: stryMutAct_9fa48("965") ? "" : (stryCov_9fa48("965"), '100%'),
            boxShadow: stryMutAct_9fa48("966") ? "" : (stryCov_9fa48("966"), '0px 2px 0px rgba(0, 0, 0, 0.1)'),
            mb: 6
          })} />
                    <Button onClick={reg} sx={stryMutAct_9fa48("967") ? {} : (stryCov_9fa48("967"), {
            backgroundColor: stryMutAct_9fa48("968") ? "" : (stryCov_9fa48("968"), '#1D2023'),
            borderRadius: stryMutAct_9fa48("969") ? "" : (stryCov_9fa48("969"), '16px'),
            textTransform: stryMutAct_9fa48("970") ? "" : (stryCov_9fa48("970"), 'none'),
            fontFamily: stryMutAct_9fa48("971") ? "" : (stryCov_9fa48("971"), 'Manrope'),
            fontWeight: 400,
            fontSize: stryMutAct_9fa48("972") ? "" : (stryCov_9fa48("972"), '20px'),
            lineHeight: stryMutAct_9fa48("973") ? "" : (stryCov_9fa48("973"), '20px'),
            letterSpacing: stryMutAct_9fa48("974") ? "" : (stryCov_9fa48("974"), '0.01em'),
            color: stryMutAct_9fa48("975") ? "" : (stryCov_9fa48("975"), '#FFFFFF'),
            width: stryMutAct_9fa48("976") ? "" : (stryCov_9fa48("976"), '100%'),
            p: stryMutAct_9fa48("977") ? "" : (stryCov_9fa48("977"), '24px'),
            cursor: stryMutAct_9fa48("978") ? "" : (stryCov_9fa48("978"), 'pointer'),
            '&:hover': stryMutAct_9fa48("979") ? {} : (stryCov_9fa48("979"), {
              background: stryMutAct_9fa48("980") ? "" : (stryCov_9fa48("980"), 'rgb(123, 135, 154)')
            })
          })}>
                        Join the team
                    </Button>
                    <Typography align="center" onClick={log} sx={stryMutAct_9fa48("981") ? {} : (stryCov_9fa48("981"), {
            cursor: stryMutAct_9fa48("982") ? "" : (stryCov_9fa48("982"), 'pointer'),
            mt: 2,
            fontFamily: stryMutAct_9fa48("983") ? "" : (stryCov_9fa48("983"), 'Manrope'),
            fontWeight: 400,
            fontSize: stryMutAct_9fa48("984") ? "" : (stryCov_9fa48("984"), '16px'),
            lineHeight: stryMutAct_9fa48("985") ? "" : (stryCov_9fa48("985"), '24px'),
            color: stryMutAct_9fa48("986") ? "" : (stryCov_9fa48("986"), '#7B879A')
          })}>
                        Are you "old"?
                    </Typography>
                </Box>
            </Box>
        </Box>;
  }
};