import React from 'react'
import LatestNews from './components/LatestNews'
import LatestIndia from './components/LatestIndia'
import LatestWorld from './components/LatestWorld'
import LatestSports from './components/LatestSports'
import LatestBusiness from './components/LatestBusiness'
import Title from './components/Title'


const App = () => {
  return (
  <>
  <div>
    <LatestNews/>
  </div>

  <div className='mb-10'>
    <Title title="LATEST INDIA NEWS"/>
    <div className='grid grid-cols-4 gap-4 pr-10 pl-10  pt-5'>
      <LatestIndia/>
    </div>
  </div>

  <div className='mb-10'>
    <Title title="LATEST WORLD NEWS"/>
    <div className='grid grid-cols-4 gap-4 pr-10 pl-10  pt-5'>
      <LatestWorld/>
    </div>
  </div>

  <div className='mb-10'>
    <Title title="LATEST SPORTS NEWS"/>
    <div className='grid grid-cols-4 gap-4 pr-10 pl-10  pt-5'>
      <LatestSports/>
    </div>
  </div>
  <div className='mb-10'>
    <Title title="LATEST BUSINESS NEWS"/>
    <div className='grid grid-cols-4 gap-4 pr-10 pl-10  pt-5'>
      <LatestBusiness/>
    </div>
  </div>
  
  </>
  )
}

export default App