import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LatestBusiness = () => {
  const [businessNews, setBusinessNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Assuming categoryId for Business is 3
  const BUSINESS_CATEGORY_ID = 9;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get('http://localhost:3000/news');
        const filtered = res.data
          .filter(item => item.categoryId === BUSINESS_CATEGORY_ID)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // newest first
          .slice(0, 5); // only latest 5
        setBusinessNews(filtered);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch business news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="text-gray-500 text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businessNews.map((item, idx) => (
        <div
          key={idx}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm"
        >
          <a href="#">
            <img
              className="rounded-t-lg h-48 w-full object-cover"
              src={item.image || 'https://via.placeholder.com/300x200?text=No+Image'}
              alt="News"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700">
              {item.description?.slice(0, 100)}...
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestBusiness;
