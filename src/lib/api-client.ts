import axios, { AxiosError } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    if (apiKey) {
      config.headers['X-API-Key'] = apiKey;
    }

    const authStorage = typeof window !== 'undefined' ? localStorage.getItem('auth-storage') : null;
    const token = authStorage ? JSON.parse(authStorage)?.state?.token : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorData = (error as AxiosError)?.response?.data || error;
    if (errorData?.errors) {
      for (const [, value] of Object.entries(errorData.errors.errors)) {
        if (Array.isArray(value) && value.length > 0) {
          errorData.message = `${value[0]}!`;
          break;
        } else if (typeof value === "string") {
          errorData.message = `${value}!`;
          break;
        }
      }
    }
    return Promise.reject(errorData);
  }
);

export default apiClient;