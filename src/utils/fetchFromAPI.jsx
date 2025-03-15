import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const API_KEY = import.meta.env.VITE_RAPID_API_KEY; // Use environment variables

const options = {
  params: { maxResults: 50 },
  headers: {
    'X-RapidAPI-Key': API_KEY,  
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return { items: [] };
  }
};
