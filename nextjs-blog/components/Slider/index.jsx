import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [slides]);

    return (
        <div className="slider-container bg-gray-200 w-full h-96 flex items-center justify-center">
            <div className="slider w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <Link href={slide.addr} target="_blank">
                        <div
                            key={slide.seq}
                            className={`slide w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'
                                }`}
                        >
                            <div className="relative w-full h-64">
                            <div className="relative">
                                    <img 
                                        src={"/images/" + slide.backgroundImage}
                                        alt={slide.name}
                                        className="w-full h-full object-cover center"
                                    />
                                     </div>
                                <div className="backdrop-blur absolute top-80 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur backdrop-filter backdrop-saturate-150">
                                    <h1 className="font-serif font-bold text-6xl font-bold text-sky-600">{slide.name}</h1>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Slider;