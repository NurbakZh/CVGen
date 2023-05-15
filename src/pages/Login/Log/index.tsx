import React, {useCallback, useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {logIn} from "../../../http";

export const Log: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, [setEmail]);

    const onChangePass = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, [setPassword]);

    const log = useCallback(() => {
        logIn(email, password).then(r => {
            if (r !== 'Request failed with status code 500' && r !== 'Request failed with status code 404') {
                navigate('/');
            } else {
                if (email.trim().length > 0 &&
                    password.trim().length > 0)
                {
                    alert('Email or password incorrect');
                } else {
                    alert('Fill all the fields please');
                }
            }
        });
    },[email, password, navigate]);
    const reg = () => navigate('/register');
    return (
        <Box sx={{
            backgroundColor: '#EBEFFF', borderRadius: '20px',
            p: { xs: '24px', sm: '36px', md: '72px'},
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 5,
        }}>
            <Box sx={{ width: {xs: '100%', sm: '50%' } }}>
                <Typography sx={{
                    fontFamily: 'ManropeBold',
                    fontWeight: 400,
                    fontSize: '48px',
                    lineHeight: '60px',
                    letterSpacing: '0.01em',
                    color: '#1D2023',
                }}>We are happy to see you again</Typography>
                <Typography sx={{
                    mt: 3,
                    fontFamily: 'Manrope',
                    fontWeight: 400,
                    fontSize: '24px',
                    lineHeight: '30px',
                    letterSpacing: '0.01em',
                    color: '#1D2023',
                }}>
                    Fill in the fields and return to your CSV
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 25px rgba(255, 255, 255, 0.25)',
                borderRadius: '16px',
                width: {xs: '100%', sm: '50%' }
            }}>
                <Box sx={{p: {xs: '16px 16px', md: '72px 82px'}}}>
                    <TextField
                        onChange={onChangeEmail}
                        placeholder={'You email'}
                        variant="standard"
                        type="text"
                        inputProps={{style: {
                            fontFamily: 'Manrope',
                            fontWeight: 400,
                            fontSize: '24px',
                            lineHeight: '30px',
                            letterSpacing: '0.01em',
                        }}}
                        sx={{
                            width: '100%',
                            boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)',
                            mb: 6,
                        }}
                     />
                    <TextField
                        onChange={onChangePass}
                        placeholder={'Your password'}
                        type="password"
                        variant="standard"
                        inputProps={{style: {
                                fontFamily: 'Manrope',
                                fontWeight: 400,
                                fontSize: '24px',
                                lineHeight: '30px',
                                letterSpacing: '0.01em',
                            }}}
                        sx={{
                            width: '100%',
                            boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.1)',
                            mb: 6,
                        }}
                    />
                    <Button
                        onClick={log}
                        sx={{
                            backgroundColor: '#1D2023',
                            borderRadius: '16px',
                            textTransform: 'none',
                            fontFamily: 'Manrope',
                            fontWeight: 400,
                            fontSize: '20px',
                            lineHeight: '20px',
                            letterSpacing: '0.01em',
                            color: '#FFFFFF',
                            width: '100%',
                            p: '24px',
                            cursor: 'pointer',
                            '&:hover': {
                                background: 'rgb(123, 135, 154)',
                            },
                        }}>
                        Dive in
                    </Button>
                    <Typography
                        align="center"
                        onClick={reg}
                        sx={{
                            cursor: 'pointer',
                            mt: 2,
                            fontFamily: 'Manrope',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#7B879A',
                        }}>
                        Are you new?
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}