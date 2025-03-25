import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function Disclaimer() {
    return (
        <Box
            sx={{
                margin: '30px',
                color: 'red',
                textAlign: 'center',
                padding: '20px',
                background: 'rgba(250, 190, 190, 0.2)',
                border: '2px dashed rgb(255, 0, 0)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 0 10 rgba(0, 0, 0, .2)',
                borderRadius: '20px',
            }}
        >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
                ⚠️ Important Disclaimer ⚠️
            </Typography>
            <Typography>
                WoundSense is not a medical device and does not provide a diagnosis.
            </Typography>
            <Typography>
                Always seek professional medical advice for accurate diagnosis and treatment.
            </Typography>
            <Typography>
                Results may not be 100% accurate; use them as a preliminary guide only.
            </Typography>
        </Box>
    );
}
