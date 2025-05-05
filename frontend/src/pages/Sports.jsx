import React from 'react'
import Title from '../components/Title';
import img from '../assets/logo.png';
import Layout from '../components/Layout';

const Sports = () => {
  return (
    <>
      <div className="mt-5 mb-10 px-10">
        {/* Section Title */}
        <div className="mb-6">
          <Title title="SPORTS NEWS" />
        </div>

        {/* News Card */}
        <div className='grid grid-col-1 gap-8'>
          <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img src={img} alt="News" className="h-60 w-full object-cover md:w-80 rounded-md" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">Headline of the News</h2>
                <p className="text-gray-700 mb-4">
                  This is a short description of the news content. Make it concise, engaging, and informative.
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-fit">
                  READ MORE
                </button>
              </div>
            </div>

          </div>


          <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img src={img} alt="News" className="h-60 w-full object-cover md:w-80 rounded-md" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">Headline of the News</h2>
                <p className="text-gray-700 mb-4">
                  This is a short description of the news content. Make it concise, engaging, and informative.
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-fit">
                  READ MORE
                </button>
              </div>
            </div>

          </div>


          <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img src={img} alt="News" className="h-60 w-full object-cover md:w-80 rounded-md" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">Headline of the News</h2>
                <p className="text-gray-700 mb-4">
                  This is a short description of the news content. Make it concise, engaging, and informative.
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-fit">
                  READ MORE
                </button>
              </div>
            </div>

          </div>


          <div className="bg-amber-100 rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 p-6">
              {/* Image */}
              <div className="flex-shrink-0">
                <img src={img} alt="News" className="h-60 w-full object-cover md:w-80 rounded-md" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">Headline of the News</h2>
                <p className="text-gray-700 mb-4">
                  This is a short description of the news content. Make it concise, engaging, and informative.
                </p>
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-fit">
                  READ MORE
                </button>
              </div>
            </div>

          </div>


        </div>
      </div>

    </>
  )
}

export default Sports