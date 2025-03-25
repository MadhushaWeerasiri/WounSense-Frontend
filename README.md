# WoundSense Frontend

## Overview

WoundSense is a web-based application designed to assist non-expert users in classifying wound types, providing care suggestions, and offering educational content on wound care. The frontend is a single-page application (SPA) built with React, ensuring a seamless and intuitive user experience. It allows users to upload wound images, view classification results with confidence scores, access educational resources, and provide feedback, all while emphasizing that the system is not a substitute for professional medical advice. The frontend communicates with a FastAPI backend running on `localhost:8000` and is optimized for simplicity (80% user priority) and low-bandwidth usage (40% user need) through image compression and lazy-loading techniques.

## Features

- **Image Upload and Classification**: Users can upload wound images (JPG/PNG) in the "Predict" section, which are compressed (e.g., 2 MB to 500 KB) and sent to the backend for classification.
- **Dynamic Results Display**: Displays the predicted wound type (e.g., "cut, 75% confidence"), care suggestions, and a disclaimer ("This is not a substitute for professional medical advice").
- **Educational Content**: The "Learn" section provides information on ten wound types, fetched from a local directory with lazy-loading for performance.
- **Feedback Form**: Users can rate classification accuracy (1–5 scale), with submissions stored in a local SQLite database via the backend.
- **Responsive Design**: Styled with Tailwind CSS for compatibility across devices.

## Prerequisites

- **Node.js**: Version 18 or higher (download from [nodejs.org](https://nodejs.org)).
- **npm**: Comes with Node.js, used for package management.
- **Backend Server**: Ensure the FastAPI backend is running on `http://localhost:8000` (refer to the backend README for setup).

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-repo>/woundsense.git
   cd woundsense/frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs React, React Router, Axios, Tailwind CSS, and other dependencies listed in `package.json`.

3. **Configure Environment**:
   - Ensure the backend API URL (`http://localhost:8000`) is correctly set in the frontend configuration (e.g., in a `.env` file or directly in the Axios setup).
   - Example `.env`:
     ```
     REACT_APP_API_URL=http://localhost:8000
     ```

## Running the Application

1. **Start the Development Server**:
   ```bash
   npm start
   ```
   This runs the frontend on `http://localhost:3000` by default.

2. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`.
   - Ensure the backend is running to enable API requests (e.g., for predictions and feedback submission).

## Project Structure

```
frontend/
├── public/
│   ├── index.html        # Main HTML file
│   └── static/           # Static assets (e.g., educational content images)
├── src/
│   ├── components/       # Reusable React components (e.g., ImageUpload, ResultCard)
│   ├── pages/            # Page components (e.g., Predict, Learn, About)
│   ├── App.js            # Main App component with React Router setup
│   ├── index.js          # Entry point for React
│   └── styles/           # Tailwind CSS and custom styles
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Usage

- **Predict Section**: Navigate to the "Predict" tab, upload a wound image (JPG/PNG), and view the classification result, confidence score, care suggestion, and disclaimer.
- **Learn Section**: Access the "Learn" tab to read educational content about the ten wound types (e.g., abrasions, diabetic wounds).
- **Feedback**: Use the feedback form to rate the classification accuracy, helping improve the system.
- **Responsive Design**: The application is optimized for both desktop and mobile devices, ensuring accessibility.

## Development Notes

- **React Router**: Used for client-side routing to maintain the SPA design, enabling navigation without full page reloads.
- **Axios**: Handles API requests to the FastAPI backend (e.g., `/predict` for classifications, `/feedback` for submissions).
- **Image Compression**: Utilizes `browser-image-compression` to reduce image sizes before upload, supporting low-bandwidth users.
- **Lazy-Loading**: Educational content images are lazy-loaded to improve performance, especially for users with slower connections.
- **Tailwind CSS**: Provides responsive styling, ensuring a consistent look across devices.

## Troubleshooting

- **Backend Not Responding**:
  - Ensure the FastAPI backend is running on `http://localhost:8000`.
  - Check the API URL in the frontend configuration.
- **CORS Issues**:
  - Verify that the backend has CORS middleware enabled for `http://localhost:3000`.
- **Image Upload Fails**:
  - Confirm the uploaded file is a valid JPG/PNG and under the size limit (e.g., 5 MB after compression).
- **Slow Performance**:
  - Check for network issues or large image sizes; the compression should reduce file sizes to ~500 KB.

## Future Improvements

- **Cloud Deployment**: Transition to a cloud-based frontend to improve scalability and accessibility.
- **Multilingual Support**: Add language options to the educational content for broader user reach.
- **Enhanced Feedback**: Include more detailed feedback forms to gather specific user insights.
- **Video Tutorials**: Integrate video content in the "Learn" section to enhance educational resources.

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For questions or support, contact the development team at `mdweerasiri@gmail.com`.



