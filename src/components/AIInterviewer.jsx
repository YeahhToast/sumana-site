// components/AIInterviewer.jsx
import { useState, useEffect, useRef } from 'react';
import { sendMessageToClaude } from '../services/claudeService';

export default function AIInterviewer({ language = 'english', interviewType = 'general' }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize the interview with a greeting
  useEffect(() => {
    const initializeInterview = async () => {
      setIsLoading(true);
      try {
        // Create appropriate initial prompt based on interview type and language
        const initialPrompt = `You are an AI interviewer for a ${interviewType} position. Conduct this interview in ${language}. Begin with a brief introduction and your first question.`;
        
        const response = await sendMessageToClaude(initialPrompt);
        const assistantMessage = response.content[0].text;
        
        setMessages([
          { role: 'assistant', content: assistantMessage }
        ]);
      } catch (error) {
        console.error('Failed to initialize interview:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    initializeInterview();
  }, [language, interviewType]);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;
    
    const userMessage = input;
    setInput('');
    
    // Update UI immediately with user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);
    
    try {
      // Send the full conversation context for better continuity
      const conversationContext = `This is an AI interview for a ${interviewType} position conducted in ${language}. Continue the interview based on the conversation history.`;
      
      // Include conversation history
      const fullPrompt = `${conversationContext}\n\nConversation history:\n${messages.map(msg => `${msg.role}: ${msg.content}`).join('\n')}\n\nUser: ${userMessage}`;
      
      const response = await sendMessageToClaude(fullPrompt);
      const assistantMessage = response.content[0].text;
      
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto border rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
          >
            <div 
              className={`inline-block p-3 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-gray-200">
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="border-t p-4">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}