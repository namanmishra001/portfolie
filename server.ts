import express, { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import { RESUME_TEXT } from './constants';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Shared server-side Gemini client with 'aistudio-build' User-Agent header
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn('GEMINI_API_KEY environment variable is not set on the server.');
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
};

const SYSTEM_INSTRUCTION = `You are an AI assistant for Naman Mishra's portfolio website. 
Your goal is to answer questions about Naman's professional experience, skills, and projects based STRICTLY on the following resume context.

RESUME CONTEXT:
${RESUME_TEXT}

Guidelines:
1. Be professional, enthusiastic, and concise.
2. Speak in the first person representing Naman (e.g., "I have experience with...") or as a helpful assistant (e.g., "Naman has experience with...").
3. If a user asks about a skill not listed, say "It doesn't look like that's explicitly listed in the resume, but based on his backend expertise, he might be familiar with related concepts."
4. Highlight the "Lead" aspect, enterprise banking at RBC, and "AI/RAG/Kafka" expertise when relevant.`;

// Server-side Gemini API route
app.post('/api/chat', async (req: Request, res: Response): Promise<void> => {
  try {
    const { message, stream } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'A valid message string is required.' });
      return;
    }

    const ai = getAIClient();
    if (!ai) {
      res.status(503).json({
        error: "I'm currently in demo mode as my API key hasn't been configured in the server environment. Please check the Settings > Secrets panel.",
      });
      return;
    }

    // Support streaming if requested
    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      const responseStream = await ai.models.generateContentStream({
        model: 'gemini-3.8-flash',
        contents: message,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      for await (const chunk of responseStream) {
        if (chunk.text) {
          res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
        }
      }
      res.write('data: [DONE]\n\n');
      res.end();
      return;
    }

    // Standard non-streaming generateContent with fallback for 503 load spikes
    let responseText = '';
    const modelsToTry = ['gemini-3.8-flash', 'gemini-flash-latest'];
    let lastError: any = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: message,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
        responseText = response.text || "I couldn't generate a response at the moment.";
        lastError = null;
        break;
      } catch (err: any) {
        lastError = err;
        const errMsg = err?.message || '';
        // If 503 high demand or temporarily unavailable, try the fallback model
        if (errMsg.includes('503') || errMsg.includes('high demand') || errMsg.includes('UNAVAILABLE')) {
          console.warn(`Model ${modelName} returned 503, attempting fallback...`);
          continue;
        }
        throw err;
      }
    }

    if (lastError && !responseText) {
      throw lastError;
    }

    res.json({
      text: responseText,
    });
  } catch (error: any) {
    console.error('Server-side Gemini error:', error);
    res.status(500).json({
      error: error?.message || 'Internal server error communicating with Gemini API.',
    });
  }
});

// Full-Stack Dev and Production routing
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // Mount Vite dev middlewares
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Full-stack server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
