import React, { useEffect, useState } from 'react'
import axios from 'axios'

const LatestNews = () => {
    const [newsItems, setNewsItems] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        axios.get('http://localhost:3000/news')
            .then(res => {
                setNewsItems(res.data)
            })
            .catch(err => {
                console.error("Error fetching news:", err)
            })
    }, [])

    const goToPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setActiveIndex((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1))
    }

    return (
        <div id="latest-carousel" className="relative w-full" data-carousel="static">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {newsItems.map((item, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}`}
                        data-carousel-item
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 text-xl font-bold">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {newsItems.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`w-3 h-3 rounded-full ${activeIndex === idx ? 'bg-white' : 'bg-gray-400'}`}
                    />
                ))}
            </div>

            {/* Controls */}
            <button
                type="button"
                onClick={goToPrev}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            >
                <span className="w-10 h-10 rounded-full bg-white/30 text-white flex items-center justify-center">
                    ‹
                </span>
            </button>
            <button
                type="button"
                onClick={goToNext}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            >
                <span className="w-10 h-10 rounded-full bg-white/30 text-white flex items-center justify-center">
                    ›
                </span>
            </button>
        </div>
    )
}

export default LatestNews;
