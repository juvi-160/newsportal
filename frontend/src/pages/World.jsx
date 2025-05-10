import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for data fetching
import Title from '../components/Title';

const World = () => {
  const [newsData, setNewsData] = useState([]); // State to store news data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
   const fetchNews = async () => {
  try {
    setLoading(true);
    const response = await axios.get('http://localhost:3000/news');
    console.log(response.data); // Log to check the structure
    const worldNews = response.data.news.filter(newsItem => {
      console.log(newsItem.category); // Check the category value
      return newsItem.category === 'world';
    });
    setNewsData(worldNews);
  } catch (err) {
    setError('Error fetching data');
  } finally {
    setLoading(false);
  }
}; fetchNews();
  }, []); // Empty dependency array means it runs once when the component mounts

  if (loading) return <div>Loading...</div>; // Show loading if data is being fetched
  if (error) return <div>{error}</div>; // Show error message if there's an issue

  return (
    <div className="mt-5 mb-10 px-10">
      {/* Section Title */}
      <div className="mb-6">
        <Title title="WORLD NEWS" />
      </div>

      {/* News Cards */}
      <div className='grid grid-cols-1 gap-8'>
        {newsData.length > 0 ? (
          newsData.map((newsItem, index) => (
            <div key={index} className="bg-amber-100 rounded-lg shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={newsItem.image || NA} // Use the image from the response if available
                    alt="News"
                    className="h-60 w-full object-cover md:w-80 rounded-md"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-xl font-semibold mb-2">{newsItem.title}</h2> {/* Use dynamic title */}
                  <p className="text-gray-700 mb-4">
                    {newsItem.description} {/* Use dynamic description */}
                  </p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-fit">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No world news available</div>
        )}
      </div>
    </div>
  );
};

export default World;
