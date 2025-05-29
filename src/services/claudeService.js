// src/services/claudeService.js

// IMPORTANT: Never put your actual API key here in front-end code!

export async function sendMessageToClaude(message) {
    try {
      // Updated to point to the Next.js API route
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message
        })
      });
      
      return await response.json();
    } catch (error) {
      console.error('Error calling Claude API:', error);
      throw error;
    }
  }