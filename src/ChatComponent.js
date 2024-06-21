import React, { useState } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [awaitingLocation, setAwaitingLocation] = useState(null);

    const predefinedQuestions = [
        "Any hospital around me?",
        "Any police station around me?"
    ];

    const sendMessage = async (message) => {
        const options = {
            method: 'POST',
            url: 'https://intellichat-ai-chatbot.p.rapidapi.com/chat',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-host': 'intellichat-ai-chatbot.p.rapidapi.com',
                'x-rapidapi-key': '361ab8e565msh784eb5ba3a4a562p10b4d7jsn54f745b0a87b'
            },
            data: {
                user_input: message
            }
        };

        try {
            const response = await axios.request(options);
            console.log('API Response:', response.data);

            if (response.data && response.data.reply) {
                const botMessage = response.data.reply;
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'user', text: message },
                    { sender: 'bot', text: botMessage }
                ]);
            } else {
                console.error('Unexpected response structure:', response.data);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'user', text: message },
                    { sender: 'bot', text: 'Error: No reply from bot' }
                ]);
            }
        } catch (error) {
            console.error('Error sending message:', error);
            console.error('Error details:', error.response ? error.response.data : error.message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'user', text: message },
                { sender: 'bot', text: `Error: ${error.response ? error.response.data.message : 'Failed to send message'}` }
            ]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim()) {
            if (awaitingLocation) {
                fetchNearbyInformation(awaitingLocation, input);
                setAwaitingLocation(null);
            } else {
                sendMessage(input);
            }
            setInput('');
        }
    };

    const handlePredefinedQuestionClick = (question) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'user', text: question }
        ]);
        setMessages((prevMessages) => [
            ...prevMessages,
            { sender: 'bot', text: 'Where do you live?' }
        ]);
        setAwaitingLocation(question);
    };

    const fetchNearbyInformation = async (question, location) => {
        try {
            let queryType = "";
            let botMessage = "";
            if (question === "Any hospital around me?") {
                queryType = "hospital";
                botMessage = `Here are some ${queryType}s in ${location}:`;
            } else if (question === "Any police station around me?") {
                queryType = "police station";
                botMessage = `Here are some ${queryType}s in ${location}:`;
            } else {
                botMessage = "Please use the 2 options given";
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: botMessage }
                ]);
                return;
            }
    
            const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
                params: {
                    q: `${queryType} in ${location}`,
                    format: 'json',
                    limit: 5
                },
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                }
            });
    
            console.log('API Response:', response.data);
    
            if (response.data && response.data.length > 0) {
                const places = response.data.map(place => place.display_name).join(', ');
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: `${botMessage} ${places}` }
                ]);
            } else {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: 'bot', text: `No ${queryType}s found in ${location}` }
                ]);
            }
        } catch (error) {
            console.error('Error fetching city information:', error);
            console.error('Error details:', error.response ? error.response.data : error.message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: `Error fetching information for ${location}: ${error.message}` }
            ]);
        }
    };
    

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ flex: 1, overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
                {messages.map((msg, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: msg.sender === 'bot' ? 'flex-start' : 'flex-end', marginBottom: '10px' }}>
                        <div style={{
                            maxWidth: '60%',
                            padding: '10px',
                            borderRadius: '10px',
                            background: msg.sender === 'bot' ? '#f1f0f0' : '#007bff',
                            color: msg.sender === 'bot' ? '#000' : '#fff',
                            textAlign: 'left'
                        }}>
                            <p style={{ margin: 0 }}><strong>{msg.sender}:</strong> {msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginBottom: '10px' }}>
                {predefinedQuestions.map((question, index) => (
                    <button key={index} onClick={() => handlePredefinedQuestionClick(question)} style={{ margin: '5px' }}>
                        {question}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    style={{ flex: 1, padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', marginLeft: '10px' }}>Send</button>
            </form>
        </div>
    );
};

export default ChatComponent;
