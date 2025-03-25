import * as React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '10px',
        background: 'rgb(251, 190, 110)',
        height: '40px',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px auto',
        userSelect: 'none'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: 'rgb(23, 146, 150)',
          cursor: 'pointer',
          marginLeft: '20px',
        }}
        onClick={() => scrollToSection('Home')}
      >
        WoundSense
      </Typography>

      {/* Navigation Menu */}
      <Stack spacing={3} direction="row" sx={{ marginRight: '20px' }}>
        <Button
          sx={{ color: 'rgb(23, 146, 150)', fontWeight: 'bold' }}
          onClick={() => scrollToSection('Home')}
        >
          Home
        </Button>
        <Button
          sx={{ color: 'rgb(23, 146, 150)', fontWeight: 'bold' }}
          onClick={() => scrollToSection('Predict')}
        >
          Predict
        </Button>
        <Button
          sx={{ color: 'rgb(23, 146, 150)', fontWeight: 'bold' }}
          onClick={() => scrollToSection('Wounds')}
        >
          Wounds
        </Button>
        <Button
          sx={{ color: 'rgb(23, 146, 150)', fontWeight: 'bold' }}
          onClick={() => scrollToSection('About')}
        >
          About
        </Button>
      </Stack>
    </Box>
  );
}
