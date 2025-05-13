import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LatestIndia from '../components/LatestIndia';

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const fallbackImage = "https://via.placeholder.com/800x400?text=No+Image";

  useEffect(() => {
    // Fetch news detail
    axios.get(`http://localhost:3000/news/${id}`)
      .then((res) => setNews(res.data))
      .catch(() => setError('Unable to fetch news details.'));

    // Fetch all categories
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:3000/categories');
        setCategories(res.data.categories || res.data); // Depending on your backend shape
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, [id]);

  const getCategoryName = () => {
    const found = categories.find(cat => cat.id === news?.categoryId);
    return found ? found.name : 'N/A';
  };

  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;
  if (!news) return <div className="text-gray-500 text-center py-10">Loading news details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <img
        src={news.image ? `http://localhost:3000/uploads/${news.image}` : fallbackImage}
        alt={news.title}
        className="w-full h-80 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{news.title}</h1>
      <div className="text-gray-600 text-sm mb-2 space-y-1">
        <p><strong>Published by:</strong> {news.publisherName || 'Unknown'}</p>
        <p><strong>Date:</strong> {new Date(news.createdAt).toLocaleString()}</p>
        <p><strong>Category:</strong> {getCategoryName()}</p>
      </div>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed whitespace-pre-line">
        {news.description}
      </p>

    </div>

    
  );
};

export default NewsDetail;
