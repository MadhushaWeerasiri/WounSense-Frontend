import { Box, Typography } from '@mui/material'
import * as React from 'react'

export default function About() {
    return (
        <Box
            id= 'About'
            sx={{
                paddingTop: '70px'
            }}
        >
            <Typography variant='h4' sx={{textAlign: 'center', color: '#feb337'}}>About WoundSense</Typography>
            <Box
            className="wrapper"
            sx={{
                padding: '20px',
                margin: '10px'
            }}
            >
                <Box className="purpose">
                    <Typography variant='h5'>Purpose</Typography>
                    <ul>
                        <li>WoundSense is a web-based tool to help you understand wounds by providing preliminary classifications, care suggestions, and educational content.</li>
                        <li>It is designed for informational purposes only and is not a substitute for professional medical advice.</li>
                    </ul>
                </Box>

                <Box className="how-to-use">
                    <Typography variant='h5'>How to Use:</Typography>
                    <ul>
                        <li>Upload a clear image of the wound using the "Upload Wound Image" button.</li>
                        <li>Receive a classification result (e.g., "This appears to be a cut, 75% confidence") within 5 seconds.</li>
                        <li>View general care suggestions (e.g., "Clean with water") and educational content about the wound type.</li>
                        <li>Results are presented in three simple steps to ensure ease of use.</li>
                    </ul>
                </Box>

                <Box className="what-youll-see">
                    <Typography variant='h5'>What You'll See in Results:</Typography>
                    <ul>
                        <li>Wound classification with a confidence score (e.g., "75% confidence") to show the likelihood of accuracy.</li>
                        <li>General care suggestions based on the classification.</li>
                        <li>Visual examples and descriptions of the wound type (e.g., "A cut is...").</li>
                        <li>A disclaimer reminding you to consult a doctor for professional advice.</li>
                    </ul>
                </Box>

                <Box className="educational-content">
                    <Typography variant='h5'>Educational Content</Typography>
                    <ul>
                        <li>Learn about more wound types: abrasions, bruises, burns, cuts, diabetic wounds, lacerations, pressure wounds, surgical wounds, and venous wounds.</li>
                        <li>Each wound type includes a description, visual example, and basic care tips to enhance understanding.</li>
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}