// pages/entrevista.jsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AIInterviewer from '../components/AIInterviewer';

export default function InterviewPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [candidateInfo, setCandidateInfo] = useState(null);
  const [language, setLanguage] = useState('Spanish');
  const [interviewType, setInterviewType] = useState('general');
  const [started, setStarted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verify token when component mounts
    const verifyToken = async () => {
      if (!router.isReady) return;
      
      const { token } = router.query;
      if (!token) {
        setIsAuthorized(false);
        setIsLoading(false);
        return;
      }
      
      try {
        // Client-side verification (basic)
        // For production, use a server-side API endpoint to verify tokens
        const response = await fetch('/api/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token })
        });
        
        const data = await response.json();
        if (data.valid) {
          setIsAuthorized(true);
          setCandidateInfo(data.candidateInfo);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        setIsAuthorized(false);
      } finally {
        setIsLoading(false);
      }
    };
    
    verifyToken();
  }, [router.isReady, router.query]);

  if (isLoading) {
    return <div className="text-center py-12">Verifying access...</div>;
  }
  
  if (!isAuthorized) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
        <p>You need a valid interview invitation to access this page.</p>
      </div>
    );
  }

  const handleStartInterview = () => {
    setStarted(true);
  };

  // Rest of your interview page code...
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Interview Assistant</h1>
      
      {!started ? (
        // Language and interview type selection UI
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Language</label>
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
              <option value="Portuguese">Portuguese</option>
              <option value="French">French</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Interview Type</label>
            <select 
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="general">General</option>
              <option value="technical">Technical</option>
              <option value="behavioral">Behavioral</option>
              {/* Add more interview types as needed */}
            </select>
          </div>
          
          <button 
            onClick={handleStartInterview}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Start Interview
          </button>
        </div>
      ) : (
        // Interview component with session ID for data storage
        <AIInterviewer 
          language={language} 
          interviewType={interviewType} 
          candidateEmail={candidateInfo?.candidateEmail}
          positionId={candidateInfo?.positionId}
          sessionId={(candidateInfo && candidateInfo.sessionId) || Date.now().toString()}
        />
      )}
    </div>
  );
}