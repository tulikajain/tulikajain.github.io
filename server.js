require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve root index.html (for Render/local when index.html lives at repo root)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// In-memory storage (replace with database later)
let recommendations = [];

// Load initial data
const loadRecommendations = async () => {
  try {
    const data = await fs.readFile(path.join(__dirname, 'recommendations.json'), 'utf8');
    recommendations = JSON.parse(data);
  } catch (error) {
    console.log('No existing recommendations file, starting fresh');
    recommendations = [];
  }
};

const saveRecommendations = async () => {
  try {
    await fs.writeFile(path.join(__dirname, 'recommendations.json'), JSON.stringify(recommendations, null, 2));
  } catch (error) {
    console.error('Error saving recommendations:', error);
  }
};

// Google Places API integration
const searchPlaces = async (query) => {
  if (!process.env.GOOGLE_PLACES_API_KEY) {

    // Return mock data if no API key
    return [
      {
        place_id: 'mock_1',
        name: `${query} Restaurant`,
        formatted_address: '123 Main St, New York, NY 10001, USA',
        rating: 4.5,
        price_level: 2,
        types: ['restaurant', 'food', 'establishment'],
        opening_hours: { open_now: true },
        geometry: { location: { lat: 40.7128, lng: -74.0060 } }
      },
      {
        place_id: 'mock_2', 
        name: `${query} Bar & Grill`,
        formatted_address: '456 Oak Ave, New York, NY 10002, USA',
        rating: 4.2,
        price_level: 3,
        types: ['bar', 'restaurant', 'food', 'establishment'],
        opening_hours: { open_now: false },
        geometry: { location: { lat: 40.7589, lng: -73.9851 } }
      }
    ];
  }

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
      params: {
        query: query,
        key: process.env.GOOGLE_PLACES_API_KEY,
        type: 'restaurant|bar|night_club|cafe'
      }
    });
    
    return response.data.results.slice(0, 5); // Limit to 5 results
  } catch (error) {
    console.error('Google Places API error:', error);
    return [];
  }
};

const getPlaceDetails = async (placeId) => {
  if (!process.env.GOOGLE_PLACES_API_KEY || placeId.startsWith('mock_')) {
    // Return mock details
    return {
      name: 'Mock Restaurant',
      formatted_address: '123 Main St, New York, NY',
      formatted_phone_number: '(555) 123-4567',
      opening_hours: {
        weekday_text: [
          'Monday: 11:00 AM – 10:00 PM',
          'Tuesday: 11:00 AM – 10:00 PM',
          'Wednesday: 11:00 AM – 10:00 PM',
          'Thursday: 11:00 AM – 10:00 PM',
          'Friday: 11:00 AM – 11:00 PM',
          'Saturday: 10:00 AM – 11:00 PM',
          'Sunday: 10:00 AM – 9:00 PM'
        ]
      },
      price_level: 2,
      rating: 4.5,
      types: ['restaurant', 'food', 'establishment'],
      website: 'https://mockrestaurant.com'
    };
  }

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
      params: {
        place_id: placeId,
        fields: 'name,formatted_address,formatted_phone_number,opening_hours,price_level,rating,types,website',
        key: process.env.GOOGLE_PLACES_API_KEY
      }
    });
    
    return response.data.result;
  } catch (error) {
    console.error('Google Places Details API error:', error);
    return null;
  }
};

// API Routes
app.get('/api/search-places', async (req, res) => {
  const { query } = req.query;
  
  if (!query || query.length < 2) {
    return res.json([]);
  }
  
  try {
    const places = await searchPlaces(query);
    return res.json(places);
  } catch (error) {
    console.error('Search error:', error);
    return res.status(500).json({ error: 'Search failed' });
  }
});

app.get('/api/place-details/:placeId', async (req, res) => {
  try {
    const details = await getPlaceDetails(req.params.placeId);
    return res.json(details);
  } catch (error) {
    console.error('Place details error:', error);
    return res.status(500).json({ error: 'Failed to get place details' });
  }
});

app.get('/api/recommendations', (req, res) => {
  return res.json(recommendations);
});

app.post('/api/recommendations', async (req, res) => {
  const recommendation = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date().toISOString()
  };
  
  recommendations.push(recommendation);
  await saveRecommendations();
  return res.json(recommendation);
});

app.put('/api/recommendations/:id', async (req, res) => {
  const { id } = req.params;
  const index = recommendations.findIndex(r => r.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Recommendation not found' });
  }
  
  recommendations[index] = { ...recommendations[index], ...req.body };
  await saveRecommendations();
  return res.json(recommendations[index]);
});

app.delete('/api/recommendations/:id', async (req, res) => {
  const { id } = req.params;
  const index = recommendations.findIndex(r => r.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Recommendation not found' });
  }
  
  recommendations.splice(index, 1);
  await saveRecommendations();
  return res.json({ success: true });
});

// Chat endpoint (mock OpenAI integration)
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  
  if (!process.env.CHATGPT_API_KEY) {
    // Mock response
    const response = generateMockChatResponse(message, recommendations);
    return res.json({ response });
  }
  
  try {
    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    const openaiResponse = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: `Today's date is ${todayString}. You are a helpful assistant that provides recommendations from this curated list: ${JSON.stringify(recommendations)}. Only recommend places from this list. If asked about something not in the list, politely mention that it's outside your curated recommendations.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.CHATGPT_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    return res.json({ response: openaiResponse.data.choices[0].message.content });
  } catch (error) {
    console.error('OpenAI API error:', error);
    const fallbackResponse = generateMockChatResponse(message, recommendations);
    return res.json({ response: fallbackResponse });
  }
});

function generateMockChatResponse(message, recommendations) {
  return "I can't help you...I'm a mock response";
 }

// Export the app for Vercel
module.exports = app;

// Start server only when run locally
if (require.main === module) {
  (async () => {
    await loadRecommendations();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })();
}