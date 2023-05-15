import {Box, Grid, Stepper, StepLabel, Step, Typography} from "@mui/material";
import React, {FC, useCallback, useRef, useState} from "react";
import {Title} from "../Steps/Title";
import {Profile} from "../Steps/Profile";
import {Education} from "../Steps/Education";
import {Employment} from "../Steps/Empolyment";
import {Skills} from "../Steps/Skills";
import {Languages} from "../Steps/Languages";
import {download} from "../../utils/downlaod";

export type education = {
    name: string;
    years: string;
    descr: string;
}

export type employment = {
    name: string;
    years: string;
    descr: string;
}

export const CSV: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const steps = ['Title', 'Profile', 'Education', 'Employment', 'Skills', 'Languages'];
    const [title, setTitle] = useState('');
    const [decsr, setDescr] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [profile, setProfile] = useState('');
    const [education, setEducation] = useState<education[]>([{name: '', descr: '', years: ''}]);
    const [employment, setEmployment] = useState<employment[]>([{name: '', descr: '', years: ''}]);
    const [skills, setSkills] = useState<string[]>(['']);
    const [languages, setLanguages] = useState<string[]>(['']);

    const handleSkillsChange = useCallback((value: string, index: number) => {
        let items = [...skills];
        items[index] = value;
        setSkills(items);
    }, [setSkills, skills]);

    const handleNewSkill = useCallback(() => {
        setSkills((oldArray => [...oldArray, '']));
    }, [setSkills]);

    const handleLanguagesChange = useCallback((value: string, index: number) => {
        let items = [...languages];
        items[index] = value;
        setLanguages(items);
    }, [setLanguages, languages]);

    const handleNewLanguages = useCallback(() => {
        setLanguages((oldArray => [...oldArray, '']));
    }, [setLanguages]);

    const handleEmploymentChange = useCallback((value: employment, index: number) => {
        let items = [...employment];
        items[index] = value;
        setEmployment(items);
    }, [setEmployment, employment]);

    const handleNewEmployment = useCallback(() => {
        setEmployment((oldArray => [...oldArray, {name: '', descr: '', years: ''}]));
    }, [setEmployment]);

    const handleEduChange = useCallback((value: education, index: number) => {
        let items = [...education];
        items[index] = value;
        setEducation(items);
    }, [setEducation, education]);

    const handleNewEdu = useCallback(() => {
        setEducation((oldArray => [...oldArray, {name: '', descr: '', years: ''}]));
    }, [setEducation]);

    const handleProfileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setProfile(e.target.value);
    }, [setProfile]);

    const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }, [setTitle]);

    const handleDescrChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDescr(e.target.value);
    }, [setDescr]);

    const handleNext = useCallback(async () => {
        if (activeStep === steps.length - 1) {
            const element = ref.current;
            if(element !== undefined && element !== null) {
                download(element);
            }
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }, [activeStep, steps]);

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <Grid container sx={{ height: '100vh' }}>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ backgroundColor: '#EBEFFF', height: 'calc(100% - 80px)', padding: '40px' }}>
                    <Stepper activeStep={activeStep} sx={{ overflowX: 'auto' }}>
                        {steps.map((label, index) => {
                            const stepProps: { completed?: boolean } = {};
                            const labelProps: {
                                optional?: React.ReactNode;
                            } = {};
                            return (
                                <Step key={label} {...stepProps} sx={{ padding: 0, marginRight: '24px' }}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {activeStep === 0 &&
                        <Title
                            title={title}
                            decsr={decsr}
                            handleDescrChange={handleDescrChange}
                            handleTitleChange={handleTitleChange}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                    {activeStep === 1 &&
                        <Profile
                            profile={profile}
                            handleProfileChange={handleProfileChange}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                    {activeStep === 2 &&
                        <Education
                            education={education}
                            handleEduChange={handleEduChange}
                            handleNewEdu={handleNewEdu}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                    {activeStep === 3 &&
                        <Employment
                            employment={employment}
                            handleEmploymentChange={handleEmploymentChange}
                            handleNewEmployment={handleNewEmployment}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                    {activeStep === 4 &&
                        <Skills
                            skills={skills}
                            handleSkillsChange={handleSkillsChange}
                            handleNewSkill={handleNewSkill}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                    {activeStep === 5 &&
                        <Languages
                            languages={languages}
                            handleLanguagesChange={handleLanguagesChange}
                            handleNewLanguages={handleNewLanguages}
                            activeStep={activeStep}
                            onClickBack={handleBack}
                            onClickNext={handleNext}
                            steps={steps.length}
                        />
                    }
                </Box>
            </Grid>
            <Grid ref={ref} item xs={12} sm={6} md={8}>
                <Box sx={{ height: 'calc(100% - 80px)', padding: '40px' }}>
                    <TitleText value={title} />
                    <SubTitle value={decsr} />
                    <Box mt={2}>
                        <TitleText value={profile.length < 1 ? "" : "Profile"} />
                        <SubTitle value={profile} />
                    </Box>
                    <Box mt={2}>
                        <TitleText value={education[0].name.length < 1 ? "" : "Education History"} />
                        {education.map((value, index) => {
                            return (
                                <Box key={index} sx={{ mb: 2}}>
                                    <Typography sx={{ mt: 1, fontFamily: 'ManropeBold', fontSize: '17px', lineHeight: '28px' }}>{value.name}</Typography>
                                    <Typography sx={{ mt: 1, fontWeight: 300 }}>{value.years}</Typography>
                                    <SubTitle value={value.descr} />
                                </Box>
                            )
                        })}
                    </Box>
                    <Box mt={2}>
                        <TitleText value={employment[0].name.length < 1 ? "" : "Employment History"} />
                        {employment.map((value, index) => {
                            return (
                                <Box key={index}>
                                    <Typography sx={{ mt: 1, fontFamily: 'ManropeBold', fontSize: '17px', lineHeight: '28px' }}>{value.name}</Typography>
                                    <Typography sx={{ mt: 1, fontWeight: 300 }}>{value.years}</Typography>
                                    <SubTitle value={value.descr} />
                                </Box>
                            )
                        })}
                    </Box>
                    <Box mt={2}>
                        <TitleText value={skills[0].length < 1 ? "" : "Skills"} />
                        {skills[0].length > 0 &&
                            <>
                                {skills.map((value, index) => {
                                    return <ListTitle index={index} value={value} key={index} />
                                })}
                            </>
                        }
                    </Box>
                    <Box mt={2}>
                        <TitleText value={languages[0].length < 1 ? "" : "Languages"} />
                        {languages[0].length > 0 &&
                            <>
                                {languages.map((value, index) => {
                                    return <ListTitle index={index} value={value} key={index} />
                                })}
                            </>
                        }
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export const TitleText: FC<{value: string}> = ({value}) => {
    return (
        <Typography sx={{
            fontFamily: 'ManropeBold',
            fontSize: '24px',
            lineHeight: '28px',
            overflowWrap: 'break-word',
            maxWidth: '100%',
            color: 'rgba(27, 31, 59, 0.8)',
        }}>
            {value}
        </Typography>
    );
};

export const SubTitle: FC<{value: string}> = ({value}) => {
    return (
        <Typography sx={{
            fontFamily: 'Manrope',
            fontSize: '17px',
            lineHeight: '28px',
            maxWidth: '100%',
            overflowWrap: 'break-word',
            mt: 1,
            color: 'rgba(27, 31, 59, 0.8)',
        }}>
            {value}
        </Typography>
    );
}

export const ListTitle: FC<{value: string, index: number}> = ({value, index}) => {
    return (
        <Typography sx={{
            fontFamily: 'Manrope',
            fontSize: '17px',
            maxWidth: '100%',
            overflowWrap: 'break-word',
            lineHeight: '20px',
            mt: 1,
            color: 'rgba(27, 31, 59, 0.8)',
        }}>
            {index+1}: {value}
        </Typography>
    );
}