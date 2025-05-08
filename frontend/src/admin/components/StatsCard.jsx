import React from 'react';

const StatsCard = ({ title, count, loading = false }) => {
  return (
    <div className='bg-amber-100 rounded-2xl p-10'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{count}</p>
      )}
    </div>
  );
};

export default StatsCard;