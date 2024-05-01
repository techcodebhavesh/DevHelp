import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
require('dotenv').config();
async function sendGeminiRequest(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;

  const response = await axios.post(GEMINI_API_URL, {
    prompt,
    temperature: 0.7, // Adjust temperature for desired response style (0.0 = factual, 1.0 = creative)
  }, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  return response.data.generations[0].text;
}
