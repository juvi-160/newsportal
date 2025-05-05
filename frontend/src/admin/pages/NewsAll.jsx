import React from 'react';
import { Link } from 'react-router-dom';

const NewsAll = () => {
  // Sample news data
  const newsData = [
    {
      id: 1,
      title: 'Breaking News: React 19 Released',
      category: 'Technology',
      date: '2023-05-15',
      views: 1542,
      status: 'Published'
    },
    {
      id: 2,
      title: 'Economic Growth Reaches 5%',
      category: 'Business',
      date: '2023-05-10',
      views: 892,
      status: 'Published'
    },
    {
      id: 3,
      title: 'New Health Guidelines Announced',
      category: 'Health',
      date: '2023-05-05',
      views: 1245,
      status: 'Draft'
    },
  ];

  return (
    <div className="p-6 mt-20">
      {/* Header with title and ADD NEWS button on the right */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All News</h1>
        <Link 
          to="/admin/addNews"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          ADD NEWS
        </Link>
      </div>

      {/* News Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {newsData.map((news) => (
              <tr key={news.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{news.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{news.views}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    news.status === 'Published' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {news.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link 
                    to={`/edit-news/${news.id}`} 
                    className="text-blue-600 hover:text-blue-900 mr-3 hover:underline"
                  >
                    Edit
                  </Link>
                  <button className="text-red-600 hover:text-red-900 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Pagination would go here */}
    </div>
  );
};

export default NewsAll;