import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL ;

const api = axios.create({
  baseURL: backendUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Categories
export const getCategories = () => api.get('/categories');
export const getCategoryCount = () => api.get('/categories/count');
export const createCategory = (name) => api.post('/categories/create', { name });
export const deleteCategory = (id) => api.delete(`/categories/${id}`);
export const updateCategory = (id, name) => api.put(`/categories/${id}`, { name });
export const getCategoryById = (id) => api.get(`/categories/${id}`);

// News
export const getAllNews = () => api.get('/news');
export const getNewsCounts = () => api.get('/news/count');
export const getNewsByCategory = (categoryId) => api.get(`/news?categoryId=${categoryId}`);
export const createNews = (formData) => api.post('/news/create', formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const updateNews = (id, formData) => api.put(`/news/${id}`, formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const deleteNews = (id) => api.delete(`/news/${id}`);
export const getNewsById = (id) => api.get(`/news/${id}`);

// Auth
export const login = (email, password) => api.post('/users/login', { email, password });

export default api;