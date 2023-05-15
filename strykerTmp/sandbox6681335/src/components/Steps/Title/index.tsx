// @ts-nocheck
import React, {type FC} from 'react';
import {Box, TextField, Typography} from "@mui/material";
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

export const Title: FC<Props> = ({onClickNext, onClickBack, activeStep, steps, title, decsr, handleTitleChange, handleDescrChange}) => {
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
                    Step 1. Enter the title & brief description
                </Typography>
                <TextField
                    inputProps={{
                        maxLength: 200,
                        style: {fontFamily: 'Manrope'}
                    }}
                    FormHelperTextProps={{
                        style: {
                            alignSelf: 'end'
                        }
                    }}
                    helperText={`${title.length}/${200}`}
                    sx={{
                        mt: 3,
                        width: '100%',
                        '& .MuiInputBase-root': {
                            background: 'white',
                            borderRadius: '12px'
                        }
                    }}
                    value={title}
                    label="Title"
                    onChange={handleTitleChange}
                />
                <TextField
                    inputProps={{
                        maxLength: 800,
                        style: {fontFamily: 'Manrope'}
                    }}
                    FormHelperTextProps={{
                        style: {
                            alignSelf: 'end'
                        }
                    }}
                    value={decsr}
                    helperText={`${decsr.length}/${800}`}
                    sx={{
                        mt: 3,
                        width: '100%',
                        '& .MuiInputBase-root': {
                            background: 'white',
                            borderRadius: '12px'
                        }
                    }}
                    multiline rows={3}
                    label="Brief Description"
                    onChange={handleDescrChange}
                />
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
