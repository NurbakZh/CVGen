import React, {type FC, useCallback} from 'react';
import {TextField} from "@mui/material";

interface Props {
    handleChange: (value: string, index: number) => void;
    index: number;
    value: string;
}

export const LanguagesTextField: FC<Props> = ({handleChange, index, value}) => {
    const handleSkillChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value, index);
    }, [index, handleChange]);

    return (
        <TextField
            inputProps={{
                maxLength: 50,
                style: {fontFamily: 'Manrope'}
            }}
            FormHelperTextProps={{
                style: {
                    alignSelf: 'end'
                }
            }}
            value={value}
            helperText={`${value.length}/${50}`}
            sx={{
                mt: 2,
                width: '100%',
                '& .MuiInputBase-root': {
                    background: 'white',
                    borderRadius: '12px',
                    height: '50px',
                }
            }}
            label={`Language ${index + 1}`}
            onChange={handleSkillChange}
        />
    );
};
