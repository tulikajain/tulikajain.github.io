require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GEMINI_API_KEY, CHATGPT_API_KEY, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID } = require('./api');

const app = express();
app.use(cors());
app.use(express.json());

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const CHATGPT_API_URL = 'https://api.openai.com/v1/chat/completions';

app.post('/api/generate', async (req, res) => {
  try {
    const { prompt, model } = req.body;
    
    if (model === 'gemini') {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });
      const data = await response.json();
      res.json(data);
    } else if (model === 'chatgpt') {
      const response = await fetch(CHATGPT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CHATGPT_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });
      const data = await response.json();
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/tts', async (req, res) => {
  const { text } = req.body;
  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.5 }
      })
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error('ElevenLabs API error:', response.status, errorText);
      throw new Error('Failed to fetch audio from ElevenLabs: ' + errorText);
    }
    const audioBuffer = await response.arrayBuffer();
    res.set('Content-Type', 'audio/mpeg');
    res.send(Buffer.from(audioBuffer));
  } catch (err) {
    console.error('TTS endpoint error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

