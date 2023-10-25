import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

const Slider = ({ slides }) => {
    const router = useRouter();
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
        <div className="slider-container bg-gray-200 w-full md:h-[52vh] h-48 flex items-center justify-center">
            <div className="slider w-full h-full overflow-hidden">
                {slides.map((slide, index) => (
                    <Link 
                    // href={slide.addr}
                        href={router?.asPath.includes("#search_products") ? router?.asPath : router?.asPath + "#search_products"}
                    //  target="_blank"
                     >
                        <div
                            key={slide.seq}
                            className={`slide w-full h-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'block' : 'hidden'
                                }`}
                        >
                            <div className="relative w-full md:h-64 h-40">
                                <div className="relative">
                                    <img
                                        src={"/images/" + slide.backgroundImage}
                                        alt={slide.name}
                                        className="w-full h-full object-cover center"
                                    />
                                </div>
                                <div className="backdrop-blur absolute md:top-96 top-48 left-0 right-0 bottom-0 flex items-center justify-center backdrop-blur backdrop-filter backdrop-saturate-150">
                                    <h1 className="font-serif font-bold md:text-6xl text-4xl font-bold text-sky-600">{slide.name}</h1>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </div>) : (<></>)
    );
};

export default Slider;
