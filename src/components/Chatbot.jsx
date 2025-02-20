import { useState } from "react";
import axios from "axios";
import "../styles/Chatbot.css";
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = "Your_Gemini_API_Key"; // ⚠️ Replace this with your actual API key

  const sendMessage = async () => {
    if (!input.trim()) return;
  
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
  
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `You are a chatbot integrated into the portfolio of **Tushansh Bajaj**, a Full Stack Developer and AI/ML Enthusiast. Your job is to provide highly accurate, structured responses based on the details provided below.  
                  
                  **Profile Details:**  
                  - **Name:** Tushansh Bajaj  
                  - **Profession:** Full Stack Developer | AI/ML Enthusiast  
                  - **Skills:**  
                    - Programming: Python, JavaScript, C++, SQL  
                    - Web Development: React.js, Next.js, Node.js, Express.js  
                    - AI/ML: Machine Learning, NLP, Computer Vision, TensorFlow, IBM Watson  
                    - Cloud: AWS, Firebase, MongoDB  
                  - **Experience:**  
                    - AI Intern at AICTE  
                    - Student Coordinator at Tech Mahindra Job Fair  
                    - Training & Placement Coordinator at ADGIPS  
                  - **Projects:**  
                    1️⃣ **Budget Manager** - AI-based expense tracker with anomaly detection.  
                    2️⃣ **AI Resume Analyzer** - Deep learning tool for optimizing resumes.  
                    3️⃣ **GT-ChatBot** - AI-powered chatbot with authentication & modern UI.  
                    4️⃣ **Personalized News Recommender** - ML-based system for curated articles.  
                    5️⃣ **PokéBook** - Pokémon data explorer with real-time search.  
                  - **Contact Information:**  
                    📩 Email: [tbb1242@gmail.com](mailto:tbb1242@gmail.com)  
                    🐙 GitHub: [github.com/Tushansh](https://github.com/Tushansh)  
                    🔗 LinkedIn: [linkedin.com/in/tushansh-bajaj-393169309](http://www.linkedin.com/in/tushansh-bajaj-393169309)  
  
                  **Answer the user's question using only the information provided above. If the user asks something outside of Tushansh's profile, politely respond that you are designed to assist with questions related to Tushansh Bajaj's portfolio.  
  
                  **User Question:** ${input}`
                }
              ]
            }
          ]
        },
        {
          headers: { "Content-Type": "application/json" }
        }
      );
  
      let botMessage = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond.";
      botMessage = botMessage.replace(/[*_-]/g, ""); // Remove Markdown symbols
  
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages([...newMessages, { sender: "bot", text: "Sorry, I couldn't process your request right now." }]);
    }
  };
    
  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <FaCommentDots />
        </div>
      ) : (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <FaRobot className="chat-icon" />
            <span>Portfolio AI Chat</span>
            <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}><FaPaperPlane /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
