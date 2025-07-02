import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { candidateEmail, positionId, expiresIn = '24h' } = body;

    if (!candidateEmail || !positionId) {
      return NextResponse.json(
        { error: 'candidateEmail and positionId are required' },
        { status: 400 }
      );
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const payload = {
      candidateEmail,
      positionId,
      sessionId: Date.now().toString(),
      createdAt: new Date().toISOString()
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn });

    return NextResponse.json({
      success: true,
      token,
      payload,
      expiresIn
    });

  } catch (error) {
    console.error('Error generating token:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}