import React from 'react';
import TotalNews from './components/TotalNews';
import TotalCategory from './components/TotalCategory';
import IndiaNews from './components/IndiaNews'
import WorldNews from './components/WorldNews'
import SportsNews from './components/SportsNews'
import BusinessNews from './components/BusinessNews'

const Admin = () => {
  return (
    <div className='p-4 pt-20'>
      <div className='font-bold text-2xl pb-8'>
        <h1>Welcome Admin</h1>
      </div>

      <div className='grid h-56 grid-cols-2 gap-4 '>
        <div>
          <TotalNews />
        </div>
        <div>
          <TotalCategory />
        </div>
        <div>
          <IndiaNews />
        </div>
        <div>
          <WorldNews />
        </div>
        <div>
          <SportsNews />
        </div>
        <div>
          <BusinessNews />
        </div>
        
      </div>
    </div>
  );
};

export default Admin;