import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import React, { useEffect } from 'react';

export default function FreeStrokePage () {
    let timeAgo = "";
    if (Date.parse("2023-11-13T11:13:00.000Z")) {
        timeAgo = formatDistanceToNow(new Date("2023-11-13T11:13:00.000Z"), { addSuffix: true });
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className='projects-page'>
        <Link to="/" className="back-button">
            &laquo;
        </Link>
        <div className="projects-info">
            <p className="time-ago">⏲️ {timeAgo}</p>
        </div>
        <h2>Free Stroke: Outdoor Swimming React Native Mobile App</h2>
        <p className='project-description'>A React Native app created with 4 other team members. The aim of this app was to help users to find safe outdoor swimming spots. We leveraged MongoDB for robust backend support and Firebase for user authentication, featuring an intuitive interface for exploring locations and sharing reviews. Dive in for a seamless experience that combines functionality with simplicity.</p>
        <br></br>
        <iframe src="https://player.vimeo.com/video/887269641" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <br></br>
        <h3>Key Information</h3>
            <h4>Objective</h4>
            <p>Develop a versatile React Native application for tracking and discovering safe swimming locations. The backend, powered by MongoDB, exposes a RESTful API with endpoints for fetching location details, reviews, user authentication, and more.</p>
            
            <h4>Technologies Used</h4>
            <p>React Native for the front-end, MongoDB for the backend database, and Firebase for user authentication. The API provides various endpoints for serving location information, reviews, and user data.</p>
            
            <h4>Explore the app's functionality by interacting with the live application.</h4>
            
            <h4>API Endpoints</h4>
            
            <h5>Get All Endpoints</h5>
            <p>GET /api: Serves up a JSON representation of all available endpoints.</p>
            
            <h5>Get All Locations</h5>
            <p>GET /api/locations: Serves coordinates of safe swimming spots.</p>
            
            <h5>Get Location Details</h5>
            <p>GET /api/locations/:location_id: Serves details of a specific location.</p>
            
            <h5>Get Reviews for a Location</h5>
            <p>GET /api/locations/:location_id/reviews: Serves all reviews for a specific location.</p>
            
            <h5>Post a Review</h5>
            <p>POST /api/locations/:location_id/reviews: Posts a review based on location ID.</p>
            
            <h5>Delete a Review</h5>
            <p>DELETE /api/reviews/:review_id: Deletes a review based on the review ID and returns no content.</p>
            
            <h5>Vote on a Review</h5>
            <p>PATCH /api/reviews/:review_id: Allows users to vote on reviews.</p>
            
            <h5>Post a New Location</h5>
            <p>POST /api/locations: Allows users to post new swim locations.</p>
            
            <h4>User Authentication and Storage</h4>
            <p>User authentication is handled using Firebase, and user-specific swim locations are stored in the local storage. The app also features an image upload functionality allowing users to upload pictures of swim locations, which are hosted on Firebase, generating image URLs stored in the backend.</p>
            
            <h4>Explore Further</h4>
            <p>Backend Repository: <a href="https://github.com/milbot1992/be-freestroke" target="_blank">Link</a></p>
            <p>Frontend Repository: <a href="https://github.com/milbot1992/fe-freestroke" target="_blank">Link</a></p>
        </div>
    );
}
