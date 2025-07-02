'use client';
import { useState } from 'react';

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    candidateEmail: '',
    positionId: '',
    expiresIn: '24h'
  });
  const [generatedToken, setGeneratedToken] = useState('');
  const [interviewUrl, setInterviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateToken = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-interview-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (data.token) {
        setGeneratedToken(data.token);
        const url = `${window.location.origin}/entrevista?token=${data.token}`;
        setInterviewUrl(url);
      } else {
        alert('Error generating token: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Panel - Generate Interview Tokens</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Create New Interview Token</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Candidate Email:</label>
            <input
              type="email"
              name="candidateEmail"
              value={formData.candidateEmail}
              onChange={handleInputChange}
              placeholder="candidate@example.com"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Position ID:</label>
            <input
              type="text"
              name="positionId"
              value={formData.positionId}
              onChange={handleInputChange}
              placeholder="developer-001"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Token Expires In:</label>
            <select
              name="expiresIn"
              value={formData.expiresIn}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1h">1 Hour</option>
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
            </select>
          </div>
          
          <button
            onClick={generateToken}
            disabled={isLoading || !formData.candidateEmail || !formData.positionId}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white py-2 px-4 rounded"
          >
            {isLoading ? 'Generating...' : 'Generate Interview Token'}
          </button>
        </div>
      </div>

      {generatedToken && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Token Generated Successfully!</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Generated Token:</label>
              <div className="flex">
                <input
                  type="text"
                  value={generatedToken}
                  readOnly
                  className="flex-1 p-2 border rounded-l bg-gray-50 text-sm"
                />
                <button
                  onClick={() => copyToClipboard(generatedToken)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
                >
                  Copy
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Interview URL:</label>
              <div className="flex">
                <input
                  type="text"
                  value={interviewUrl}
                  readOnly
                  className="flex-1 p-2 border rounded-l bg-gray-50 text-sm"
                />
                <button
                  onClick={() => copyToClipboard(interviewUrl)}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r"
                >
                  Copy URL
                </button>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href={interviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
              >
                Test Interview
              </a>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
        <h4 className="font-semibold text-yellow-800">How to use:</h4>
        <ol className="list-decimal list-inside text-yellow-700 mt-2">
          <li>Fill in the candidate email and position ID</li>
          <li>Choose how long the token should be valid</li>
          <li>Click "Generate Interview Token"</li>
          <li>Copy the generated URL and send it to the candidate</li>
          <li>Or click "Test Interview" to test it yourself</li>
        </ol>
      </div>
    </div>
  );
}