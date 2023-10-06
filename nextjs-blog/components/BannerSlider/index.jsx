import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Banner from '../Banner';

const BannerSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (slides && slides?.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides ? slides?.length : 0));
            }, 4000);

            return () => {
                clearInterval(interval);
            };
        }
    }, [slides]);

    return (slides ? (
        <div className="slider-container bg-gray-200 w-full md:h-screen flex items-center justify-center">
            <div className="slider w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.seq}
                        className={`slide w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'
                            }`}
                    >
                        <div className="md:pb-2 md:py-0 md:h-auto h-fit" key={slide._id}>
                            <Banner
                                banner={slide.image}
                                textColor={slide.textColor}
                                text={slide.text}
                                description={slide.description}
                                subText={slide.subText}
                                subText2={slide.subText2}
                                subText3={slide.subText3}
                            ></Banner>
                        </div>
                    </div>
                ))}
            </div>
        </div>) : (<></>)
    );
};

export default BannerSlider;
