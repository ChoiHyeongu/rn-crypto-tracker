import axios from 'axios';
import { API_KEY, BASE_URL } from 'config/constant';

const instance = axios.create({
  baseURL: BASE_URL, headers: {
    'X-CMC_PRO_API_KEY': API_KEY,
  },
});

export const post = async (params) => {
  const response = await request(instance.post, params);
  return response;
};

export const get = async (url, config) => {
  const response = await request(instance.get, url, config);
  return response;
};

export const request = async (api, url, config) => {
  try {
    const response = await api(url, config);
    return response;
  } catch (error) {
    console.log('[REQUEST ERROR]', error);
    throw error;
  }
};
