import { Box, Button, Grid2, Typography, CircularProgress, Alert } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react';
import axios from 'axios';

export default function Predict() {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [predictionResult, setPredictionResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setError(null);
            uploadImage(file);
        }
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            setLoading(true);
            setPredictionResult(null);
            const response = await axios.post('http://localhost:8000/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            setPredictionResult(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setError('There was an error processing your image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setPredictionResult(null);
        setSelectedFile(null);
        setError(null);
    };

    return (
        <Box id="Predict" sx={{ paddingTop: '70px' }}>
            <Grid2 container spacing={2}>
                <Grid2 item size={6}>
                    <img
                        src="./assets/predict_img.jpg"
                        width="100%"
                        style={{ borderRadius: '20px' }}
                        alt="Predict Image"
                    />
                </Grid2>
                <Grid2
                    container size={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        className='wrapper'
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center'
                        }}
                    >
                        {!predictionResult && !loading && (
                            <>
                                <Typography variant="h4" padding="20px" align="center">
                                    Effortless Image Upload for Wound Classification
                                </Typography>

                                {error && (
                                    <Alert severity="error" sx={{ marginBottom: '20px' }}>
                                        {error}
                                    </Alert>
                                )}

                                <Button
                                    component="label"
                                    variant="contained"
                                    sx={{
                                        width: '300px',
                                        height: '75px',
                                        background: '#feb337',
                                        fontSize: 'large',
                                        marginTop: '20px',
                                        marginBottom: '10px',
                                        "&:hover": {
                                            background: 'rgb(215, 142, 24)',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Wound Image
                                    <input
                                        type="file"
                                        accept=".jpg,.jpeg,.png"
                                        hidden
                                        onChange={handleFileChange}
                                    />
                                </Button>

                                <Typography>or drop image here (JPG, JPEG, PNG)</Typography>
                            </>
                        )}

                        {loading && <CircularProgress sx={{ marginTop: '20px' }} />}

                        {predictionResult && (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    padding: '10px',
                                }}
                            >
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: 'green',
                                        marginBottom: '10px',
                                        textDecoration: 'underline'
                                    }}
                                >
                                    Prediction Result
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        marginBottom: '10px'

                                    }}
                                >
                                    <strong>Wound Type:</strong> {predictionResult.Class}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        marginBottom: '20px'

                                    }}
                                >
                                    <strong>Confidence:</strong> {predictionResult.Confidence}%
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        marginBottom: '10px',
                                        textAlign: 'left'

                                    }}
                                >
                                    Suggestions:
                                </Typography>
                                <ul>
                                    {predictionResult.Suggestions.map((suggestion, index) => (
                                        <li key={index}>
                                            <Typography variant="body1">{suggestion}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    variant="contained"
                                    sx={{
                                        marginTop: '20px',
                                        background: '#feb337',
                                        "&:hover": {
                                            background: 'rgb(215, 142, 24)',
                                        },
                                    }}
                                    onClick={handleReset}
                                >
                                    Upload Another Image
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    );
}