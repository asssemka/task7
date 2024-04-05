import axios from 'axios';

const API_KEY = '6vA_u6ak0_YSrtYkxe9ybNB_yOIbGyYOJmkc0A9zkzs';
const BASE_URL = 'https://api.unsplash.com/photos';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Client-ID ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const fetchImages = async (params) => {
  try {
    const response = await api.get('', { params });
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении изображений:', error);
    throw error;
  }
};
