import ChatBot from '../../assets/ChatBotScreenshot.png'

export default function ChatBotCard () {
    
    return (
        <section className="project-card">
        <img
        src={ChatBot}
        alt={`screenshot of the film recommendation app`}
        />
        <div className="project-card-content">
        <h2>Full-Stack Development: Chatbot using AI</h2>
        <h4 className='project-card-desc'>AI powered Chatbot to give fitness recommendations. Uses Python in the back-end and React in the front-end.</h4>
        <br></br>
        </div>
    </section>
    );
}