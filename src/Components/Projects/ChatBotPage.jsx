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
            The chatbot uses the OpenAI API for natural language processing, enabling it to understand and respond to user inquiries effectively. 
          </p>
          <h4>Training the Chatbot for more relevant and personalised responses</h4>
          <p className='project-description'>
            The chatbot has been trained to deliver relevant and personalised responses within the domain of fitness.
          </p>
          <p className='project-description'>
            Key features of the chatbot training include:
          </p>

          <ul className='project-description'>
            <li>
              <strong>Fitness-Focused Context:</strong>The chatbot is trained with a broad scope fitness-related information, enabling it to provide comprehensive answers.
            </li>
            <li>
              <strong>Contextual Relevance:</strong> In the backend, a data management system has been implemented to allow the chatbot to analyse the context of the conversation to maintain relevance in its responses. It uses a sophisticated algorithm to understand and retain the flow of conversation, ensuring that each response builds upon the previous ones.
            </li>
            <li>
              <strong>Non-Fitness Query Handling:</strong> If a user asks a non-fitness related question, the chatbot politely redirects the conversation by responding with, "Sorry, I am a fitness chatbot - please ask me a fitness related question." This ensures that the chatbot remains focused and provides value within its expertise.
            </li>
            <li>
              <strong>Follow-Up Information:</strong> For users seeking additional details, the chatbot is capable of expanding on previous responses. If a user requests more information, the chatbot offers further insights and elaboration related to the initial query, enhancing the user's understanding and engagement.
            </li>
            <li>
              <strong>Satisfaction and Further Inquiry:</strong> When a user employs a 'closing term' indicating satisfaction with the chatbot's response, the chatbot proactively asks, "Do you have any further questions?" This feature ensures that the user feels supported and has the opportunity to seek additional information or clarification.
            </li>
          </ul>

          <h4>Integration</h4>
          <p className='project-description'>The Flask-based backend functions seamlessly with the React front-end, providing a smooth and responsive user experience.</p>
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
