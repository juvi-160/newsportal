import React, { useEffect, useState } from 'react';
import { getNewsCounts } from '../services/api';
import StatsCard from './StatsCard';

const NewsStats = ({ category, title }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getNewsCounts();
        
        if (response.data.success) {
          // For total count use response.data.total
          // For category counts use response.data[category]
          const countValue = category === 'total' 
            ? response.data.total 
            : response.data[category.toLowerCase()];
            
          setCount(countValue || 0);
        } else {
          setError(response.data.message || 'Failed to load count');
        }
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Network error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <StatsCard 
      title={`TOTAL ${title.toUpperCase()} NEWS`} 
      count={count} 
      loading={loading}
      error={error}
    />
  );
};

export default NewsStats;