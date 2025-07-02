import { verify } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { token } = body;

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET environment variable is not set");
      return NextResponse.json({
        valid: false,
        error: 'Server configuration error'
      }, { status: 500 });
    }

    const decoded = verify(token, process.env.JWT_SECRET);
    
    const candidateInfo = {
      ...decoded,
      sessionId: decoded.sessionId || Date.now().toString()
    };
    
    return NextResponse.json({
      valid: true,
      candidateInfo
    });

  } catch (error) {
    console.error("Token verification failed:", error.message);
    return NextResponse.json({
      valid: false,
      error: 'Invalid or expired token'
    });
  }
}