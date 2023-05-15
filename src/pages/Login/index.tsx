import React from "react";
import Box from "@mui/material/Box";
import {Log} from "./Log";

export const Login: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Box sx={{ p: { xs: '24px', sm: '36px', md: '72px' }}}>
                <Log />
            </Box>
        </div>
    );
}