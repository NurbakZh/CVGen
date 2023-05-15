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
import { Box, Grid, Stepper, StepLabel, Step, Typography } from "@mui/material";
import React, { FC, useCallback, useRef, useState } from "react";
import { Title } from "../Steps/Title";
import { Profile } from "../Steps/Profile";
import { Education } from "../Steps/Education";
import { Employment } from "../Steps/Empolyment";
import { Skills } from "../Steps/Skills";
import { Languages } from "../Steps/Languages";
import { download } from "../../utils/downlaod";
export type education = {
  name: string;
  years: string;
  descr: string;
};
export type employment = {
  name: string;
  years: string;
  descr: string;
};
export const CSV: React.FC = () => {
  if (stryMutAct_9fa48("0")) {
    {}
  } else {
    stryCov_9fa48("0");
    const ref = useRef<HTMLDivElement>(null);
    const steps = stryMutAct_9fa48("1") ? [] : (stryCov_9fa48("1"), [stryMutAct_9fa48("2") ? "" : (stryCov_9fa48("2"), 'Title'), stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), 'Profile'), stryMutAct_9fa48("4") ? "" : (stryCov_9fa48("4"), 'Education'), stryMutAct_9fa48("5") ? "" : (stryCov_9fa48("5"), 'Employment'), stryMutAct_9fa48("6") ? "" : (stryCov_9fa48("6"), 'Skills'), stryMutAct_9fa48("7") ? "" : (stryCov_9fa48("7"), 'Languages')]);
    const [title, setTitle] = useState(stryMutAct_9fa48("8") ? "Stryker was here!" : (stryCov_9fa48("8"), ''));
    const [decsr, setDescr] = useState(stryMutAct_9fa48("9") ? "Stryker was here!" : (stryCov_9fa48("9"), ''));
    const [activeStep, setActiveStep] = useState(0);
    const [profile, setProfile] = useState(stryMutAct_9fa48("10") ? "Stryker was here!" : (stryCov_9fa48("10"), ''));
    const [education, setEducation] = useState<education[]>(stryMutAct_9fa48("11") ? [] : (stryCov_9fa48("11"), [stryMutAct_9fa48("12") ? {} : (stryCov_9fa48("12"), {
      name: stryMutAct_9fa48("13") ? "Stryker was here!" : (stryCov_9fa48("13"), ''),
      descr: stryMutAct_9fa48("14") ? "Stryker was here!" : (stryCov_9fa48("14"), ''),
      years: stryMutAct_9fa48("15") ? "Stryker was here!" : (stryCov_9fa48("15"), '')
    })]));
    const [employment, setEmployment] = useState<employment[]>(stryMutAct_9fa48("16") ? [] : (stryCov_9fa48("16"), [stryMutAct_9fa48("17") ? {} : (stryCov_9fa48("17"), {
      name: stryMutAct_9fa48("18") ? "Stryker was here!" : (stryCov_9fa48("18"), ''),
      descr: stryMutAct_9fa48("19") ? "Stryker was here!" : (stryCov_9fa48("19"), ''),
      years: stryMutAct_9fa48("20") ? "Stryker was here!" : (stryCov_9fa48("20"), '')
    })]));
    const [skills, setSkills] = useState<string[]>(stryMutAct_9fa48("21") ? [] : (stryCov_9fa48("21"), [stryMutAct_9fa48("22") ? "Stryker was here!" : (stryCov_9fa48("22"), '')]));
    const [languages, setLanguages] = useState<string[]>(stryMutAct_9fa48("23") ? [] : (stryCov_9fa48("23"), [stryMutAct_9fa48("24") ? "Stryker was here!" : (stryCov_9fa48("24"), '')]));
    const handleSkillsChange = useCallback((value: string, index: number) => {
      if (stryMutAct_9fa48("25")) {
        {}
      } else {
        stryCov_9fa48("25");
        let items = stryMutAct_9fa48("26") ? [] : (stryCov_9fa48("26"), [...skills]);
        items[index] = value;
        setSkills(items);
      }
    }, stryMutAct_9fa48("27") ? [] : (stryCov_9fa48("27"), [setSkills, skills]));
    const handleNewSkill = useCallback(() => {
      if (stryMutAct_9fa48("28")) {
        {}
      } else {
        stryCov_9fa48("28");
        setSkills(stryMutAct_9fa48("29") ? () => undefined : (stryCov_9fa48("29"), oldArray => stryMutAct_9fa48("30") ? [] : (stryCov_9fa48("30"), [...oldArray, stryMutAct_9fa48("31") ? "Stryker was here!" : (stryCov_9fa48("31"), '')])));
      }
    }, stryMutAct_9fa48("32") ? [] : (stryCov_9fa48("32"), [setSkills]));
    const handleLanguagesChange = useCallback((value: string, index: number) => {
      if (stryMutAct_9fa48("33")) {
        {}
      } else {
        stryCov_9fa48("33");
        let items = stryMutAct_9fa48("34") ? [] : (stryCov_9fa48("34"), [...languages]);
        items[index] = value;
        setLanguages(items);
      }
    }, stryMutAct_9fa48("35") ? [] : (stryCov_9fa48("35"), [setLanguages, languages]));
    const handleNewLanguages = useCallback(() => {
      if (stryMutAct_9fa48("36")) {
        {}
      } else {
        stryCov_9fa48("36");
        setLanguages(stryMutAct_9fa48("37") ? () => undefined : (stryCov_9fa48("37"), oldArray => stryMutAct_9fa48("38") ? [] : (stryCov_9fa48("38"), [...oldArray, stryMutAct_9fa48("39") ? "Stryker was here!" : (stryCov_9fa48("39"), '')])));
      }
    }, stryMutAct_9fa48("40") ? [] : (stryCov_9fa48("40"), [setLanguages]));
    const handleEmploymentChange = useCallback((value: employment, index: number) => {
      if (stryMutAct_9fa48("41")) {
        {}
      } else {
        stryCov_9fa48("41");
        let items = stryMutAct_9fa48("42") ? [] : (stryCov_9fa48("42"), [...employment]);
        items[index] = value;
        setEmployment(items);
      }
    }, stryMutAct_9fa48("43") ? [] : (stryCov_9fa48("43"), [setEmployment, employment]));
    const handleNewEmployment = useCallback(() => {
      if (stryMutAct_9fa48("44")) {
        {}
      } else {
        stryCov_9fa48("44");
        setEmployment(stryMutAct_9fa48("45") ? () => undefined : (stryCov_9fa48("45"), oldArray => stryMutAct_9fa48("46") ? [] : (stryCov_9fa48("46"), [...oldArray, stryMutAct_9fa48("47") ? {} : (stryCov_9fa48("47"), {
          name: stryMutAct_9fa48("48") ? "Stryker was here!" : (stryCov_9fa48("48"), ''),
          descr: stryMutAct_9fa48("49") ? "Stryker was here!" : (stryCov_9fa48("49"), ''),
          years: stryMutAct_9fa48("50") ? "Stryker was here!" : (stryCov_9fa48("50"), '')
        })])));
      }
    }, stryMutAct_9fa48("51") ? [] : (stryCov_9fa48("51"), [setEmployment]));
    const handleEduChange = useCallback((value: education, index: number) => {
      if (stryMutAct_9fa48("52")) {
        {}
      } else {
        stryCov_9fa48("52");
        let items = stryMutAct_9fa48("53") ? [] : (stryCov_9fa48("53"), [...education]);
        items[index] = value;
        setEducation(items);
      }
    }, stryMutAct_9fa48("54") ? [] : (stryCov_9fa48("54"), [setEducation, education]));
    const handleNewEdu = useCallback(() => {
      if (stryMutAct_9fa48("55")) {
        {}
      } else {
        stryCov_9fa48("55");
        setEducation(stryMutAct_9fa48("56") ? () => undefined : (stryCov_9fa48("56"), oldArray => stryMutAct_9fa48("57") ? [] : (stryCov_9fa48("57"), [...oldArray, stryMutAct_9fa48("58") ? {} : (stryCov_9fa48("58"), {
          name: stryMutAct_9fa48("59") ? "Stryker was here!" : (stryCov_9fa48("59"), ''),
          descr: stryMutAct_9fa48("60") ? "Stryker was here!" : (stryCov_9fa48("60"), ''),
          years: stryMutAct_9fa48("61") ? "Stryker was here!" : (stryCov_9fa48("61"), '')
        })])));
      }
    }, stryMutAct_9fa48("62") ? [] : (stryCov_9fa48("62"), [setEducation]));
    const handleProfileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("63")) {
        {}
      } else {
        stryCov_9fa48("63");
        setProfile(e.target.value);
      }
    }, stryMutAct_9fa48("64") ? [] : (stryCov_9fa48("64"), [setProfile]));
    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("65")) {
        {}
      } else {
        stryCov_9fa48("65");
        setTitle(e.target.value);
      }
    }, stryMutAct_9fa48("66") ? [] : (stryCov_9fa48("66"), [setTitle]));
    const handleDescrChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (stryMutAct_9fa48("67")) {
        {}
      } else {
        stryCov_9fa48("67");
        setDescr(e.target.value);
      }
    }, stryMutAct_9fa48("68") ? [] : (stryCov_9fa48("68"), [setDescr]));
    const handleNext = useCallback(async () => {
      if (stryMutAct_9fa48("69")) {
        {}
      } else {
        stryCov_9fa48("69");
        if (stryMutAct_9fa48("72") ? activeStep !== steps.length - 1 : stryMutAct_9fa48("71") ? false : stryMutAct_9fa48("70") ? true : (stryCov_9fa48("70", "71", "72"), activeStep === (stryMutAct_9fa48("73") ? steps.length + 1 : (stryCov_9fa48("73"), steps.length - 1)))) {
          if (stryMutAct_9fa48("74")) {
            {}
          } else {
            stryCov_9fa48("74");
            const element = ref.current;
            if (stryMutAct_9fa48("77") ? element !== undefined || element !== null : stryMutAct_9fa48("76") ? false : stryMutAct_9fa48("75") ? true : (stryCov_9fa48("75", "76", "77"), (stryMutAct_9fa48("79") ? element === undefined : stryMutAct_9fa48("78") ? true : (stryCov_9fa48("78", "79"), element !== undefined)) && (stryMutAct_9fa48("81") ? element === null : stryMutAct_9fa48("80") ? true : (stryCov_9fa48("80", "81"), element !== null)))) {
              if (stryMutAct_9fa48("82")) {
                {}
              } else {
                stryCov_9fa48("82");
                download(element);
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("83")) {
            {}
          } else {
            stryCov_9fa48("83");
            setActiveStep(stryMutAct_9fa48("84") ? () => undefined : (stryCov_9fa48("84"), prevActiveStep => stryMutAct_9fa48("85") ? prevActiveStep - 1 : (stryCov_9fa48("85"), prevActiveStep + 1)));
          }
        }
      }
    }, stryMutAct_9fa48("86") ? [] : (stryCov_9fa48("86"), [activeStep, steps]));
    const handleBack = () => {
      if (stryMutAct_9fa48("87")) {
        {}
      } else {
        stryCov_9fa48("87");
        setActiveStep(stryMutAct_9fa48("88") ? () => undefined : (stryCov_9fa48("88"), prevActiveStep => stryMutAct_9fa48("89") ? prevActiveStep + 1 : (stryCov_9fa48("89"), prevActiveStep - 1)));
      }
    };
    return <Grid container sx={stryMutAct_9fa48("90") ? {} : (stryCov_9fa48("90"), {
      height: stryMutAct_9fa48("91") ? "" : (stryCov_9fa48("91"), '100vh')
    })}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={stryMutAct_9fa48("92") ? {} : (stryCov_9fa48("92"), {
          backgroundColor: stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), '#EBEFFF'),
          height: stryMutAct_9fa48("94") ? "" : (stryCov_9fa48("94"), 'calc(100% - 80px)'),
          padding: stryMutAct_9fa48("95") ? "" : (stryCov_9fa48("95"), '40px')
        })}>
                    <Stepper activeStep={activeStep} sx={stryMutAct_9fa48("96") ? {} : (stryCov_9fa48("96"), {
            overflowX: stryMutAct_9fa48("97") ? "" : (stryCov_9fa48("97"), 'auto')
          })}>
                        {steps.map((label, index) => {
              if (stryMutAct_9fa48("98")) {
                {}
              } else {
                stryCov_9fa48("98");
                const stepProps: {
                  completed?: boolean;
                } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};
                return <Step key={label} {...stepProps} sx={stryMutAct_9fa48("99") ? {} : (stryCov_9fa48("99"), {
                  padding: 0,
                  marginRight: stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), '24px')
                })}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>;
              }
            })}
                    </Stepper>
                    {stryMutAct_9fa48("103") ? activeStep === 0 || <Title title={title} decsr={decsr} handleDescrChange={handleDescrChange} handleTitleChange={handleTitleChange} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("102") ? false : stryMutAct_9fa48("101") ? true : (stryCov_9fa48("101", "102", "103"), (stryMutAct_9fa48("105") ? activeStep !== 0 : stryMutAct_9fa48("104") ? true : (stryCov_9fa48("104", "105"), activeStep === 0)) && <Title title={title} decsr={decsr} handleDescrChange={handleDescrChange} handleTitleChange={handleTitleChange} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                    {stryMutAct_9fa48("108") ? activeStep === 1 || <Profile profile={profile} handleProfileChange={handleProfileChange} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("107") ? false : stryMutAct_9fa48("106") ? true : (stryCov_9fa48("106", "107", "108"), (stryMutAct_9fa48("110") ? activeStep !== 1 : stryMutAct_9fa48("109") ? true : (stryCov_9fa48("109", "110"), activeStep === 1)) && <Profile profile={profile} handleProfileChange={handleProfileChange} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                    {stryMutAct_9fa48("113") ? activeStep === 2 || <Education education={education} handleEduChange={handleEduChange} handleNewEdu={handleNewEdu} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("112") ? false : stryMutAct_9fa48("111") ? true : (stryCov_9fa48("111", "112", "113"), (stryMutAct_9fa48("115") ? activeStep !== 2 : stryMutAct_9fa48("114") ? true : (stryCov_9fa48("114", "115"), activeStep === 2)) && <Education education={education} handleEduChange={handleEduChange} handleNewEdu={handleNewEdu} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                    {stryMutAct_9fa48("118") ? activeStep === 3 || <Employment employment={employment} handleEmploymentChange={handleEmploymentChange} handleNewEmployment={handleNewEmployment} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("117") ? false : stryMutAct_9fa48("116") ? true : (stryCov_9fa48("116", "117", "118"), (stryMutAct_9fa48("120") ? activeStep !== 3 : stryMutAct_9fa48("119") ? true : (stryCov_9fa48("119", "120"), activeStep === 3)) && <Employment employment={employment} handleEmploymentChange={handleEmploymentChange} handleNewEmployment={handleNewEmployment} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                    {stryMutAct_9fa48("123") ? activeStep === 4 || <Skills skills={skills} handleSkillsChange={handleSkillsChange} handleNewSkill={handleNewSkill} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("122") ? false : stryMutAct_9fa48("121") ? true : (stryCov_9fa48("121", "122", "123"), (stryMutAct_9fa48("125") ? activeStep !== 4 : stryMutAct_9fa48("124") ? true : (stryCov_9fa48("124", "125"), activeStep === 4)) && <Skills skills={skills} handleSkillsChange={handleSkillsChange} handleNewSkill={handleNewSkill} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                    {stryMutAct_9fa48("128") ? activeStep === 5 || <Languages languages={languages} handleLanguagesChange={handleLanguagesChange} handleNewLanguages={handleNewLanguages} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} /> : stryMutAct_9fa48("127") ? false : stryMutAct_9fa48("126") ? true : (stryCov_9fa48("126", "127", "128"), (stryMutAct_9fa48("130") ? activeStep !== 5 : stryMutAct_9fa48("129") ? true : (stryCov_9fa48("129", "130"), activeStep === 5)) && <Languages languages={languages} handleLanguagesChange={handleLanguagesChange} handleNewLanguages={handleNewLanguages} activeStep={activeStep} onClickBack={handleBack} onClickNext={handleNext} steps={steps.length} />)}
                </Box>
            </Grid>
            <Grid ref={ref} item xs={12} sm={6} md={8}>
                <Box sx={stryMutAct_9fa48("131") ? {} : (stryCov_9fa48("131"), {
          height: stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'calc(100% - 80px)'),
          padding: stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), '40px')
        })}>
                    <TitleText value={title} />
                    <SubTitle value={decsr} />
                    <Box mt={2}>
                        <TitleText value={(stryMutAct_9fa48("137") ? profile.length >= 1 : stryMutAct_9fa48("136") ? profile.length <= 1 : stryMutAct_9fa48("135") ? false : stryMutAct_9fa48("134") ? true : (stryCov_9fa48("134", "135", "136", "137"), profile.length < 1)) ? stryMutAct_9fa48("138") ? "Stryker was here!" : (stryCov_9fa48("138"), "") : stryMutAct_9fa48("139") ? "" : (stryCov_9fa48("139"), "Profile")} />
                        <SubTitle value={profile} />
                    </Box>
                    <Box mt={2}>
                        <TitleText value={(stryMutAct_9fa48("143") ? education[0].name.length >= 1 : stryMutAct_9fa48("142") ? education[0].name.length <= 1 : stryMutAct_9fa48("141") ? false : stryMutAct_9fa48("140") ? true : (stryCov_9fa48("140", "141", "142", "143"), education[0].name.length < 1)) ? stryMutAct_9fa48("144") ? "Stryker was here!" : (stryCov_9fa48("144"), "") : stryMutAct_9fa48("145") ? "" : (stryCov_9fa48("145"), "Education History")} />
                        {education.map((value, index) => {
              if (stryMutAct_9fa48("146")) {
                {}
              } else {
                stryCov_9fa48("146");
                return <Box key={index} sx={stryMutAct_9fa48("147") ? {} : (stryCov_9fa48("147"), {
                  mb: 2
                })}>
                                    <Typography sx={stryMutAct_9fa48("148") ? {} : (stryCov_9fa48("148"), {
                    mt: 1,
                    fontFamily: stryMutAct_9fa48("149") ? "" : (stryCov_9fa48("149"), 'ManropeBold'),
                    fontSize: stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), '17px'),
                    lineHeight: stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), '28px')
                  })}>{value.name}</Typography>
                                    <Typography sx={stryMutAct_9fa48("152") ? {} : (stryCov_9fa48("152"), {
                    mt: 1,
                    fontWeight: 300
                  })}>{value.years}</Typography>
                                    <SubTitle value={value.descr} />
                                </Box>;
              }
            })}
                    </Box>
                    <Box mt={2}>
                        <TitleText value={(stryMutAct_9fa48("156") ? employment[0].name.length >= 1 : stryMutAct_9fa48("155") ? employment[0].name.length <= 1 : stryMutAct_9fa48("154") ? false : stryMutAct_9fa48("153") ? true : (stryCov_9fa48("153", "154", "155", "156"), employment[0].name.length < 1)) ? stryMutAct_9fa48("157") ? "Stryker was here!" : (stryCov_9fa48("157"), "") : stryMutAct_9fa48("158") ? "" : (stryCov_9fa48("158"), "Employment History")} />
                        {employment.map((value, index) => {
              if (stryMutAct_9fa48("159")) {
                {}
              } else {
                stryCov_9fa48("159");
                return <Box key={index}>
                                    <Typography sx={stryMutAct_9fa48("160") ? {} : (stryCov_9fa48("160"), {
                    mt: 1,
                    fontFamily: stryMutAct_9fa48("161") ? "" : (stryCov_9fa48("161"), 'ManropeBold'),
                    fontSize: stryMutAct_9fa48("162") ? "" : (stryCov_9fa48("162"), '17px'),
                    lineHeight: stryMutAct_9fa48("163") ? "" : (stryCov_9fa48("163"), '28px')
                  })}>{value.name}</Typography>
                                    <Typography sx={stryMutAct_9fa48("164") ? {} : (stryCov_9fa48("164"), {
                    mt: 1,
                    fontWeight: 300
                  })}>{value.years}</Typography>
                                    <SubTitle value={value.descr} />
                                </Box>;
              }
            })}
                    </Box>
                    <Box mt={2}>
                        <TitleText value={(stryMutAct_9fa48("168") ? skills[0].length <= 1 : stryMutAct_9fa48("167") ? skills[0].length >= 1 : stryMutAct_9fa48("166") ? false : stryMutAct_9fa48("165") ? true : (stryCov_9fa48("165", "166", "167", "168"), skills[0].length > 1)) ? stryMutAct_9fa48("169") ? "Stryker was here!" : (stryCov_9fa48("169"), "") : stryMutAct_9fa48("170") ? "" : (stryCov_9fa48("170"), "Skills")} />
                        {stryMutAct_9fa48("173") ? skills[0].length > 0 || <>
                                {skills.map((value, index) => {
                return <ListTitle index={index} value={value} key={index} />;
              })}
                            </> : stryMutAct_9fa48("172") ? false : stryMutAct_9fa48("171") ? true : (stryCov_9fa48("171", "172", "173"), (stryMutAct_9fa48("176") ? skills[0].length <= 0 : stryMutAct_9fa48("175") ? skills[0].length >= 0 : stryMutAct_9fa48("174") ? true : (stryCov_9fa48("174", "175", "176"), skills[0].length > 0)) && <>
                                {skills.map((value, index) => {
                if (stryMutAct_9fa48("177")) {
                  {}
                } else {
                  stryCov_9fa48("177");
                  return <ListTitle index={index} value={value} key={index} />;
                }
              })}
                            </>)}
                    </Box>
                    <Box mt={2}>
                        <TitleText value={(stryMutAct_9fa48("181") ? languages[0].length <= 1 : stryMutAct_9fa48("180") ? languages[0].length >= 1 : stryMutAct_9fa48("179") ? false : stryMutAct_9fa48("178") ? true : (stryCov_9fa48("178", "179", "180", "181"), languages[0].length > 1)) ? stryMutAct_9fa48("182") ? "Stryker was here!" : (stryCov_9fa48("182"), "") : stryMutAct_9fa48("183") ? "" : (stryCov_9fa48("183"), "Languages")} />
                        {stryMutAct_9fa48("186") ? languages[0].length > 0 || <>
                                {languages.map((value, index) => {
                return <ListTitle index={index} value={value} key={index} />;
              })}
                            </> : stryMutAct_9fa48("185") ? false : stryMutAct_9fa48("184") ? true : (stryCov_9fa48("184", "185", "186"), (stryMutAct_9fa48("189") ? languages[0].length <= 0 : stryMutAct_9fa48("188") ? languages[0].length >= 0 : stryMutAct_9fa48("187") ? true : (stryCov_9fa48("187", "188", "189"), languages[0].length > 0)) && <>
                                {languages.map((value, index) => {
                if (stryMutAct_9fa48("190")) {
                  {}
                } else {
                  stryCov_9fa48("190");
                  return <ListTitle index={index} value={value} key={index} />;
                }
              })}
                            </>)}
                    </Box>
                </Box>
            </Grid>
        </Grid>;
  }
};
export const TitleText: FC<{
  value: string;
}> = ({
  value
}) => {
  if (stryMutAct_9fa48("191")) {
    {}
  } else {
    stryCov_9fa48("191");
    return <Typography sx={stryMutAct_9fa48("192") ? {} : (stryCov_9fa48("192"), {
      fontFamily: stryMutAct_9fa48("193") ? "" : (stryCov_9fa48("193"), 'ManropeBold'),
      fontSize: stryMutAct_9fa48("194") ? "" : (stryCov_9fa48("194"), '24px'),
      lineHeight: stryMutAct_9fa48("195") ? "" : (stryCov_9fa48("195"), '28px'),
      overflowWrap: stryMutAct_9fa48("196") ? "" : (stryCov_9fa48("196"), 'break-word'),
      maxWidth: stryMutAct_9fa48("197") ? "" : (stryCov_9fa48("197"), '100%'),
      color: stryMutAct_9fa48("198") ? "" : (stryCov_9fa48("198"), 'rgba(27, 31, 59, 0.8)')
    })}>
            {value}
        </Typography>;
  }
};
export const SubTitle: FC<{
  value: string;
}> = ({
  value
}) => {
  if (stryMutAct_9fa48("199")) {
    {}
  } else {
    stryCov_9fa48("199");
    return <Typography sx={stryMutAct_9fa48("200") ? {} : (stryCov_9fa48("200"), {
      fontFamily: stryMutAct_9fa48("201") ? "" : (stryCov_9fa48("201"), 'Manrope'),
      fontSize: stryMutAct_9fa48("202") ? "" : (stryCov_9fa48("202"), '17px'),
      lineHeight: stryMutAct_9fa48("203") ? "" : (stryCov_9fa48("203"), '28px'),
      maxWidth: stryMutAct_9fa48("204") ? "" : (stryCov_9fa48("204"), '100%'),
      overflowWrap: stryMutAct_9fa48("205") ? "" : (stryCov_9fa48("205"), 'break-word'),
      mt: 1,
      color: stryMutAct_9fa48("206") ? "" : (stryCov_9fa48("206"), 'rgba(27, 31, 59, 0.8)')
    })}>
            {value}
        </Typography>;
  }
};
export const ListTitle: FC<{
  value: string;
  index: number;
}> = ({
  value,
  index
}) => {
  if (stryMutAct_9fa48("207")) {
    {}
  } else {
    stryCov_9fa48("207");
    return <Typography sx={stryMutAct_9fa48("208") ? {} : (stryCov_9fa48("208"), {
      fontFamily: stryMutAct_9fa48("209") ? "" : (stryCov_9fa48("209"), 'Manrope'),
      fontSize: stryMutAct_9fa48("210") ? "" : (stryCov_9fa48("210"), '17px'),
      maxWidth: stryMutAct_9fa48("211") ? "" : (stryCov_9fa48("211"), '100%'),
      overflowWrap: stryMutAct_9fa48("212") ? "" : (stryCov_9fa48("212"), 'break-word'),
      lineHeight: stryMutAct_9fa48("213") ? "" : (stryCov_9fa48("213"), '20px'),
      mt: 1,
      color: stryMutAct_9fa48("214") ? "" : (stryCov_9fa48("214"), 'rgba(27, 31, 59, 0.8)')
    })}>
            {stryMutAct_9fa48("215") ? index - 1 : (stryCov_9fa48("215"), index + 1)}: {value}
        </Typography>;
  }
};