import React, {type FC, useCallback, useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

interface Props {
    onClickNext: () => void;
    onClickBack: () => void;
    activeStep: number;
    steps: number;
    profile: string;
    handleProfileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Profile: FC<Props> = ({profile, handleProfileChange, onClickNext, onClickBack, activeStep, steps}) => {
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
                    Step 2. Profile
                </Typography>
                <TextField
                    inputProps={{
                        maxLength: 600,
                        style: {fontFamily: 'Manrope'}
                    }}
                    FormHelperTextProps={{
                        style: {
                            alignSelf: 'end'
                        }
                    }}
                    helperText={`${profile.length}/${600}`}
                    multiline rows={3}
                    sx={{
                        mt: 3,
                        width: '100%',
                        '& .MuiInputBase-root': {
                            background: 'white',
                            borderRadius: '12px'
                        }
                    }}
                    value={profile}
                    label="Profile"
                    onChange={handleProfileChange}
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
