import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  // Sample category data - replace with your actual data
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology', createdAt: '2023-05-01', newsCount: 24 },
    { id: 2, name: 'Business', createdAt: '2023-05-05', newsCount: 18 },
    { id: 3, name: 'Health', createdAt: '2023-05-10', newsCount: 12 },
    { id: 4, name: 'Sports', createdAt: '2023-05-15', newsCount: 32 },
    { id: 5, name: 'Entertainment', createdAt: '2023-05-20', newsCount: 45 },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(category => category.id !== id));
      // In a real app, you would call your API here
    }
  };

  return (
    <div className="p-6 mt-15">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Categories</h1>
        <Link 
          to="/admin/addCategory"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          ADD CATEGORY
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">News Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.createdAt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.newsCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link 
                    to={`/edit-category/${category.id}`} 
                    className="text-blue-600 hover:text-blue-900 mr-3 hover:underline"
                  >
                    Edit
                  </Link>
                  <button 
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600 hover:text-red-900 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;