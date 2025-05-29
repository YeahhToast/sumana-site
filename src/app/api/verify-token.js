// pages/api/verify-token.js
import { verify } from 'jsonwebtoken';

export default function handler(req, res) {
  const { token } = req.body;
  
  // Verify JWT_SECRET is set
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET environment variable is not set");
    return res.status(500).json({
      valid: false,
      error: 'Server configuration error'
    });
  }
  
  try {
    // Verify the token
    const decoded = verify(token, process.env.JWT_SECRET);
    
    // Add a unique session ID if not present
    const candidateInfo = {
      ...decoded,
      sessionId: decoded.sessionId || Date.now().toString()
    };
    
    res.json({
      valid: true,
      candidateInfo
    });
  } catch (error) {
    console.error("Token verification failed:", error.message);
    res.json({
      valid: false,
      error: 'Invalid or expired token'
    });
  }
}