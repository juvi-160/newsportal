import React from 'react';

const StatsCard = ({ title, count, loading = false, error = null }) => {
  return (
    <div className='bg-amber-100 rounded-2xl p-10 shadow-md'>
      <h1 className='font-bold text-xl mb-2 text-gray-800'>{title}</h1>
      {loading ? (
        <p className='text-gray-500'>Loading...</p>
      ) : error ? (
        <p className='text-red-500'>Error: {error}</p>
      ) : (
        <p className='text-3xl font-semibold text-blue-800'>{count}</p>
      )}
    </div>
  );
};

export default StatsCard;
