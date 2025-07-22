import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNewsByCategory = async (category = 'technology') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'us',
        category,
        apiKey: API_KEY,  // ✅ Capital "K"
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const fetchTopNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&apiKey=${API_KEY}`  // ✅ Correct
    );
    return res.data.articles;
  } catch (error) {
    console.error('Error fetching top news:', error);
    return [];
  }
};
