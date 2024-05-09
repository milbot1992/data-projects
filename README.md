# Data Projects Portfolio

## Overview
This portfolio website showcases a collection of data-driven projects, each demonstrating different applications of software engineering, data science, visualisation, and interactive elements. Built with modern web technologies, this portfolio serves as a central hub to explore diverse projects ranging from a chatbot to film recommendation systems.

## Project Structure
- `Components/`: Contains all React components used across the portfolio.
    - `FilmApp/`: Components related to the film recommendation system.
    - `MainPage/`: Component for the main landing page of the portfolio.
    - `MainSections/`: Reusable sections used across different parts of the portfolio.
    - `PortfolioSummary/`: Summary page that provides an overview of all projects.
    - `Projects/`: Individual project components, each representing a specific data project.
- `assets/`: Static assets like images and stylesheets used in the portfolio.
- `app.jsx`: React application routing file defining paths to each project.

## Prerequisites
- Node.js
- npm or Yarn

## Setup and Installation
1. **Clone the Repository**:
    ```
    git clone https://github.com/milbot1992/data-projects
    cd data-projects
    ```

2. **Install Dependencies**:
    - Run the following command to install the necessary dependencies:
        ```
        npm install
        ```

3. **Running the Application**:
    - To start the development server:
        ```
        npm run dev
        ```
    - To build the project for production:
        ```
        npm run build
        ```
    - To preview the production build:
        ```
        npm run preview
        ```

4. **Linting**:
    - To ensure code quality and consistency, run the linting tool:
        ```
        npm run lint
        ```

## Features
- **Interactive Visualisations**: Uses libraries like D3.js and React-Leaflet for dynamic data visualisations.
- **AI-Driven Insights**: Features like the Film Recommendation System and ChatBot are powered by machine learning.
- **Responsive Design**: Ensures a smooth user experience across all device types.

## Deployment
- This application is configured for easy deployment to platforms like Netlify or Vercel. Follow the specific platform's documentation for deployment instructions.
