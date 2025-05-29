import React, { useState } from 'react';
import { sendMessageToClaude } from '../services/claudeService';

function ClaudeTest() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const result = await sendMessageToClaude(input);
      setResponse(result.content[0].text);
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error communicating with Claude');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Claude API Test</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message for Claude"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
      
      {response && (
        <div>
          <h3>Claude's Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default ClaudeTest;