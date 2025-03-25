import { Box, Typography } from '@mui/material';
import * as React from 'react';

export default function WoundCard({ title, img, description }) {
  return (
    <Box
    className='wrapper'
      display="flex"
      sx={{
        margin: '10px',
        overflow: 'hidden',
      }}
    >
      <Box>
        <img
          src={`./assets/wounds/${img}.jpg`}
          alt={title}
          style={{
            maxWidth: '120px',
            padding: '10px',
            borderRadius: '25px',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '10px 10px 10px 20px',
        }}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}
