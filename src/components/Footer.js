import { Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as React from 'react';
import '../App.css';

export default function Footer() {
    return (
        <Box
            className='wrapper'
            sx={{
                background: 'rgba(255, 168, 54, 0.50)',
                textAlign: 'center',
                padding: '20px',
                margin: '20px 10px'
            }}
        >
            <Box sx={{ paddingBottom: '40px' }}>
                <Typography variant="h2" sx={{ color: 'rgb(23, 146, 150)' }}>WoundSense</Typography>
                <Typography>Smart Wound Detection System Using Machine Learning</Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-arround',
                }}
            >
                <Typography sx={{ fontSize: '0.875rem' }}>© WoundSense 2025.</Typography>
                <Typography sx={{ fontSize: '0.875rem' }}>Designed and Developed by Madhusha Weerasiri.</Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        color: 'rgb(23, 146, 150)'
                    }}
                >
                    <Typography
                        component="a"
                        href="mailto:mdweerasiri@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: '0px 10px', textDecoration: 'none', color: 'inherit' }}
                    >
                        <EmailIcon />
                    </Typography>
                    <Typography
                        component="a"
                        href="https://www.linkedin.com/in/madhushaweerasiri/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: '0px 10px', textDecoration: 'none', color: 'inherit' }}
                    >
                        <LinkedInIcon />
                    </Typography>
                    <Typography
                        component="a"
                        href="https://github.com/MadhushaWeerasiri"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ padding: '0px 10px', textDecoration: 'none', color: 'inherit' }}
                    >
                        <GitHubIcon />
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}
