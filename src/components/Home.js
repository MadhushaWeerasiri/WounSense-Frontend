import { Box, Container, Grid2, Typography } from '@mui/material';
import * as React from 'react';

export default function Home() {
    return (
        <Container
            id= 'Home'
            sx={{
                userSelect: 'none',
                paddingTop: '60px',
                borderRadius: '20px',
                background: 'rgb(132,191,205)',
                background: 'radial-gradient(circle, rgba(132, 190, 205, 0.39) 1%, rgba(255, 255, 255, 0) 75%)'
            }}
        >
            <img src='./assets/hero_img.png' width={'100%'} />
        </Container>
    )
}