import React, {type FC, useCallback} from 'react';
import {TextField} from "@mui/material";

interface Props {
    type: string;
    handleChange: (type: string, value: string, index: number) => void;
    index: number;
    value: string;
}

export const EducationTextfield: FC<Props> = ({type, handleChange, index, value}) => {
    const handleEmploymentChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(type, e.target.value, index);
    }, [index, handleChange, type]);

    let label = '';
    let limit = 0;
    if (type === 'name') {
        label = `Job ${index+1} Title`;
        limit = 100;
    }
    if (type === 'years') {
        label = `Job ${index+1} Years of Work`;
        limit = 100;
    }
    if (type === 'descr') {
        label = `Job ${index+1} Description`;
        limit = 400;
    }
    return (
        <TextField
            inputProps={{
                maxLength: limit,
                style: {fontFamily: 'Manrope'}
            }}
            FormHelperTextProps={{
                style: {
                    alignSelf: 'end'
                }
            }}
            value={value}
            helperText={`${value.length}/${limit}`}
            sx={{
                mt: 1,
                width: '100%',
                '& .MuiInputBase-root': {
                    background: 'white',
                    borderRadius: '12px'
                }
            }}
            label={label}
            onChange={handleEmploymentChange}
        />
    );
};
