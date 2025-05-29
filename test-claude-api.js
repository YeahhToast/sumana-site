require('dotenv').config();

// test-claude-api.js
// No import needed for fetch in Node.js 18+

// Replace with your actual API key
const apiKey = process.env.ANTHROPIC_API_KEY;

if (!apiKey) {
  console.error('ANTHROPIC_API_KEY environment variable is not set');
  process.exit(1);
}

async function testClaudeAPI() {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
        messages: [
          {role: 'user', content: 'Hello, world'}
        ]
      })
    });
    
    const data = await response.json();
    console.log('API Response:', data);
  } catch (error) {
    console.error('Error testing Claude API:', error);
  }
}

testClaudeAPI();