// @ts-nocheck
import React, {type FC, useCallback} from 'react';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {EducationTextfield} from "./EducationTextfield";
import {education} from "../../CSV";

interface Props {
    onClickNext: () => void;
    onClickBack: () => void;
    activeStep: number;
    steps: number;
    handleNewEdu: () => void;
    education: education[];
    handleEduChange: (value: education, index: number) => void;
}

export const Education: FC<Props> = ({education, handleEduChange, handleNewEdu, onClickNext, onClickBack, activeStep, steps}) => {
    const handleChange = useCallback((type: string, value: string, index: number) => {
        if(type === 'name') {
            handleEduChange({
                name: value,
                years: education[index].years,
                descr: education[index].descr
            }, index);
        } else if(type === 'years') {
            handleEduChange({
                name: education[index].name,
                years: value,
                descr: education[index].descr
            }, index);
        } else if(type === 'descr') {
            handleEduChange({
                name: education[index].name,
                years: education[index].years,
                descr: value
            }, index);
        }
    }, [education, handleEduChange]);
    return (
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
                <Typography sx={{
                    mt: 5,
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '19px',
                    lineHeight: '28px',
                }}>
                    Step 3. Add Education History
                </Typography>
                {education.map((value, index) => {
                    return (
                        <Box sx={{ mt: 2 }}>
                            <EducationTextfield type={'name'} value={value.name} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={'years'} value={value.years} handleChange={handleChange} index={index} key={index} />
                            <EducationTextfield type={'descr'} value={value.descr} handleChange={handleChange} index={index} key={index} />
                        </Box>
                    )
                })}
                <Button
                    variant="contained"
                    onClick={handleNewEdu}
                    sx={{
                        width: '100%',
                        backgroundColor: '#526ED3',
                        textTransform: 'none',
                        borderRadius: '12px',
                        padding: '16px 70px',
                        marginTop: '24px',
                    }}
                >
                    Add Education
                </Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' , justifyContent: 'space-between', mb: '30px'}}>
                <Button
                    onClick={onClickBack}
                    disabled={activeStep === 0}
                    sx={{
                        color: '#526ED3',
                        border: activeStep === 0 ? '1px solid rgba(0, 0, 0, 0.38)' : '1px solid #526ED3',
                        textTransform: 'none',
                        borderRadius: '12px',
                        padding: '16px 70px',
                    }}
                >
                    Back
                </Button>
                <Button
                    variant="contained"
                    onClick={onClickNext}
                    sx={{
                        backgroundColor: '#526ED3',
                        textTransform: 'none',
                        borderRadius: '12px',
                        padding: '16px 70px',
                    }}
                >
                    {activeStep === steps - 1 ? 'Finish' : 'Continue'}
                </Button>
            </Box>
        </Box>
    );
};
