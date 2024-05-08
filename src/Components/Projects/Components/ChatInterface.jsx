import React from "react";
import axios from 'axios';

class ChatInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            context: [],
            prompt: "",
            placeholderText: "Enter your question",
            isVisible: false
        };
        this.messagesEndRef = React.createRef(); // Create a ref object
    }
    
    toggleChat = () => {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }
    
    // Fetches the chat response from the server
    fetchChatResponse = (event) => {
        event.preventDefault();
        const { prompt, context } = this.state;

        this.setState({ placeholderText: "..." })
    
        // Optimistically add the user's message to the context
        const optimisticUpdate = {
            role: 'user',
            content: prompt
        };
    
        this.updateContext([optimisticUpdate]); // Update UI immediately with user's message
    
        axios.post('https://chatbot-backend-millie-b43efda832f8.herokuapp.com/', {
            prompt: prompt,
            context: context, // Include the context as required by your backend
        }).then(response => {
            if (Array.isArray(response.data.context)) {
                // Directly replace the context with the new one from the backend
                this.setState({ context: response.data.context });
            } else {
                console.error('Received data is not an array:', response.data.context);
            }
        }).catch(error => {
            console.log(error);
            // Optionally handle the error
        }).finally(() => {
            this.setState({ prompt: "", placeholderText: "Write a reply..." }); // Clear the prompt and placeholderText after processing is complete
        });
    }
    
    updateContext = (newEntries) => {
        this.setState(prevState => ({
            context: [...prevState.context, ...newEntries]
        }));
    }

    formatContent = (content) => {
        // Regex adjusted to include multiple sentences per bullet point
        const numberedListRegex = /(\d+\.\s)([\s\S]*?)(?=(\d+\.\s)|$)/g;
        let match;
        let lastIndex = 0;
        let parts = [];
    
        while ((match = numberedListRegex.exec(content)) !== null) {
            // Push text before the current match if it's not directly after the last match
            if (match.index > lastIndex) {
                parts.push(<span key={'text-' + lastIndex}>{content.substring(lastIndex, match.index)}</span>);
            }
            // Push formatted list item, trimming and removing numbers
            let bulletText = match[0].trim();
            bulletText = bulletText.substring(bulletText.indexOf('.') + 1).trim(); // Remove the number and period
            parts.push(<li key={'list-' + match.index}>{bulletText}</li>);
            lastIndex = match.index + match[0].length;
        }
        // Append any remaining text after the last match
        if (lastIndex < content.length) {
            parts.push(<span key={'text-' + lastIndex}>{content.substring(lastIndex)}</span>);
        }
    
        return parts.length > 1 ? <ul>{parts}</ul> : parts[0];
    }

    componentDidUpdate() {
        if (this.state.isVisible && this.messagesEndRef.current) {
            this.messagesEndRef.current.scrollTo(0, this.messagesEndRef.current.scrollHeight);
        }
    }

    render() {
        return (
            <div>
                {/* Button to toggle the chat interface */}
                <button className="chat-toggle-button" onClick={this.toggleChat}>
                    Chat with Us Now
                </button>

                {/* Chat interface conditional rendering */}
                {this.state.isVisible && (
                    <div className="chat-interface">
                        <div className="chat-header">
                            Ask Anything to Fitness Bot
                            <button className="close-button" onClick={this.toggleChat}>×</button>
                        </div>
                        <ul className="convo" ref={this.messagesEndRef}>
                            {this.state.context.map((entry, idx) => {
                                return (
                                    <li className={`${entry.role}-dialogue`} key={idx}>
                                        {this.formatContent(entry.content)}
                                    </li>
                                );
                            })}
                        </ul>
                        <form className="chat-form" onSubmit={this.fetchChatResponse}>
                            <input
                                type="text"
                                value={this.state.prompt}
                                onChange={(e) => this.setState({prompt: e.target.value})}
                                placeholder={this.state.placeholderText} required />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                )}
            </div>
        );
    }
}

export default ChatInterface;
