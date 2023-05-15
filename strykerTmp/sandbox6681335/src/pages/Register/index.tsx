// @ts-nocheck
import React from "react";
import Box from "@mui/material/Box";
import {Reg} from "./Reg";

export const Register: React.FC = () => {
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <Box sx={{ p: { xs: '24px', sm: '36px', md: '72px' }}}>
                <Reg />
            </Box>
        </div>
    );
}