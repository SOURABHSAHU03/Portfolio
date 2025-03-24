import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize Gemini
  const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

  // Your complete portfolio data (extract this to a separate file if large)
  const portfolioData = `
  ## NAME - SOURABH SAHU
  ## EDUCATION
  - **B.Tech in Computer Science Engineering**
    - Malaviya National Institute of Technology, Jaipur (2022-2026)
    - CGPA - 7.18
  - **Class 12th (MPBSE)**
    - GOVT. Excellence School, Betul, MP
    
  - **Class 10th (MPBSE)**
    - GOVT. Excellence School, Betul, MP
  
  ## TECHNICAL SKILLS
  - **Programming Languages:** C, C++, JavaScript, Python, SQL
  - **Web Development:** HTML/CSS, React.js, Node.js, Express.js
  - **Databases:** MongoDB, MySQL
  - **Developer Tools:** Git, GitHub, VS Code, Linux
  - **Frameworks/Libraries:** 
    - WebSocket (Real-time applications)
    - Leaflet (Map visualization)
    - Tailwind CSS (Styling)
  
  ## RELEVANT COURSEWORK
  - Data Structures & Algorithms
  - Database Management Systems
  - Machine Learning
  - Internet Technologies
  - Blockchain Technology
  - Operating Systems
  
  ## PROJECTS
  ### 1. Real-Time Collaborative Code Editor (CODERR)
  - **Tech Stack:** MERN (MongoDB, Express.js, React, Node.js), WebSocket, Tailwind CSS
  - **Features:**
    - Real-time code synchronization using WebSockets
    - Implemented secure user authentication
    - Bidirectional communication for instant updates
  
  ### 2. Map Navigator using Dijkstra's Algorithm
  - **Tech Stack:** React, Leaflet, Node.js, MongoDB, Tailwind CSS
  - **Features:**
    - Calculates shortest path between locations
    - Graph-based representation of map data
    - Visual route display using Leaflet
  
  ### 3. Blockchain Security Solution (HACHIE)
  - **Tech Stack:** Blockchain technologies
  - **Features:**
    - Prevention of front-running attacks in sharded blockchains
    - Cross-shard atomic transaction processing
    - Lightweight coordination mechanisms
  
  ## ACHIEVEMENTS
  - Solved 500+ DSA problems on LeetCode and other platforms
  - Developed 10+ projects using MERN stack and algorithms
  - NCC Cadet (2017-2018) with LEVEL-A Certification
  - GATE Qualified (2025)
  
  ## EXTRACURRICULAR
  - Executive Member - Security Team (Sphinx - 2023)
  - Active open-source contributor
  - Hackathon participant
  `;
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    // Add user message
    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Enhanced prompt with full portfolio context
      const prompt = `
      You are an AI assistant for Dhruv Nautiyal's portfolio. 
      Below is Sourabh's complete portfolio information. Read it carefully before answering:

      ${portfolioData}

      Current Question: "${input}"

      Guidelines for your response:
      1. Answer should be derived from the portfolio information above
      2. Keep responses concise (1-3 sentences)
      3. Be polite and professional
      4. If unsure, say "I don't have that information in Dhruv's portfolio"

      Answer:`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Add bot response
      setMessages(prev => [...prev, 
        { text: text.replace(/^\*+/g, '').trim(), sender: 'bot' } // Clean up response
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, 
        { text: "I'm having trouble accessing Sourabh's portfolio information right now.", sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
      scrollToBottom();
    }
  };

  // [Rest of your component code remains the same...]

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '×' : 'Ask ChatBot'}
      </button>
      
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Portfolio Assistant</h4>
            <p>Powered by Gemini AI</p>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="loading-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills or projects..."
              disabled={isLoading}
            />
            <button onClick={handleSend} disabled={isLoading || !input.trim()}>
              {isLoading ? '...' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;