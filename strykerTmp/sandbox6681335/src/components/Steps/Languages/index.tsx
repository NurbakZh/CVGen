// @ts-nocheck
import React, {type FC} from 'react';
import {Box, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {LanguagesTextField} from "./LanguagesTextField";

interface Props {
    onClickNext: () => void;
    onClickBack: () => void;
    activeStep: number;
    steps: number;
    handleNewLanguages: () => void;
    languages: string[];
    handleLanguagesChange: (value: string, index: number) => void;
}

export const Languages: FC<Props> = ({handleNewLanguages, languages, handleLanguagesChange, onClickNext, onClickBack, activeStep, steps}) => {
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
                    Step 6. Add information about programming languages
                </Typography>
                {languages.map((value, index) => {
                    return <LanguagesTextField value={value} handleChange={handleLanguagesChange} index={index} key={index} />
                })}
                <Button
                    variant="contained"
                    onClick={handleNewLanguages}
                    sx={{
                        width: '100%',
                        backgroundColor: '#526ED3',
                        textTransform: 'none',
                        borderRadius: '12px',
                        padding: '16px 70px',
                        marginTop: '24px',
                    }}
                >
                    Add New Language
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
