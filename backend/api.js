require('dotenv').config();
   
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const CHATGPT_API_KEY = process.env.CHATGPT_API_KEY;
const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = process.env.ELEVENLABS_VOICE_ID;


module.exports = {
  GEMINI_API_KEY,
  CHATGPT_API_KEY,
  ELEVENLABS_API_KEY,
  ELEVENLABS_VOICE_ID
};