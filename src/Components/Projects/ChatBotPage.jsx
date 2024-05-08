import { Link  } from "react-router-dom";
import '../../../Styling/ProjectPages.css'
import '../../../Styling/ChatInterface.css'
import React, { useEffect, useState, useRef } from 'react';
import Banner from '../../assets/ChatBot.jpeg'
import ChatInterface from "./Components/ChatInterface";

export default function ChatBotPage () {
  const [showKeyInfo, setShowKeyInfo] = useState(false);

  useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  const toggleKeyInfo = () => {
      setShowKeyInfo(prevState => !prevState);
        if (!showKeyInfo) {
            const jupyterSection = document.getElementById("jupyter-section");
                window.scrollTo({
                    top: jupyterSection.offsetTop,
                    behavior: "smooth"
                });
         }
    };

    const keyInfoRef = useRef(null);

    return (
      <>
        <img className='banner-image' src={Banner}></img>
        <div className='projects-page'>
          <Link to="/" className="back-button">
              &laquo;
          </Link>
          <div className="projects-info">
              <br></br><br></br>
          </div>
          <h2 className='film-header'>AI ChatBot</h2>
          <p className='project-description'>This fitness chatbot provides personalised advice on fitness and wellness. The backend uses a Flask Python application that interfaces with the OpenAI API to deliver fitness recommendations.</p>
          <h4>Chatbot Functionality</h4>
          <p className='project-description'>
            Our chatbot uses the OpenAI API for natural language processing, enabling it to understand and respond to user inquiries effectively. 
          </p>
          <h4>Improving Chatbot responses through Contextual Data Integration</h4>
          <p className='project-description'>
          In the backend, a sophisticated data management system has been implemented to enrich the chatbot's capabilities. This system strategically compiles and organises a comprehensive dataset that serves as a knowledge base for the chatbot. The dataset includes a wide array of fitness and wellness information, ensuring that the chatbot is equipped with the necessary context to provide relevant and accurate responses.
          </p>
          <h4>Integration</h4>
          <p className='project-description'>The Flask-based backend functions seamlessly with the React front-end, providing a smooth and responsive user experience.</p>
          <br></br>
          <p className='project-description'>
            You can interact with the fitness chatbot by clicking the 'Chat with Us Now' button in the bottom right-hand corner of this page. 
          </p>
          <p className='project-description'>
            See key information below including links to the repositories and technologies used.
          </p>
          <ChatInterface/>
            <div ref={keyInfoRef}>
                      <button className='button-keyinfo' onClick={toggleKeyInfo}>
                          {showKeyInfo ? 'Hide Key Information' : 'Click here to see Key Information'}
                      </button>
                      {showKeyInfo && (
                        <>
                        <h3>Key Information</h3>
                        <h4>Technical Implementation Details</h4>
                        <p className='project-description'>
                            The backend, developed using Flask, actively interfaces with the OpenAI API to process and understand user queries. It leverages a context-rich framework where pre-processed and curated data is fed into the chatbot. This preparatory step is crucial as it directs the chatbot's focus, enabling it to generate responses that are not only contextually appropriate but also highly personalised.
                        </p>
                        <h4>The integration process involves:</h4>
                        <ul>
                            <li><strong>Data Curation:</strong> Systematic collection and structuring of fitness-related information to build a targeted knowledge base.</li>
                            <li><strong>Context Injection:</strong> Seamlessly incorporating this curated data into the chatbot's operational framework to inform its response generation mechanism.</li>
                        </ul>
                        <p className='project-description'>
                            This structured approach to data integration ensures that the chatbot has a robust reference frame to draw from, enhancing its ability to engage users effectively and provide guidance based on a solid informational foundation.
                        </p>
                        <h4>Technologies Used</h4>
                        <ul>
                            <li>Languages: Python, JavaScript</li>
                            <li>Frameworks/Libraries: Flask, React</li>
                            <li>APIs: OpenAI</li>
                        </ul>
                        <h4>Back-end</h4>
                        <ul>
                            <li>Flask API Backend GitHub Repo: <a href="https://github.com/milbot1992/chatbot-BE">https://github.com/milbot1992/chatbot-BE</a></li>
                        </ul>
                        <h4>Front-end</h4>
                        <ul>
                            <li>React front-end Repo: <a href="https://github.com/milbot1992/data-projects">https://github.com/milbot1992/data-projects</a></li>
                        </ul>
                        </>
                        )}
            </div>
        </div>
        </>
    );
}
