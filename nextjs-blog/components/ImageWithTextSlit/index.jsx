import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ImageWithTextSlit = ({ imageUrl, linkUrl, linkText }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a className="block" 
            // href={linkUrl} target='_blank'
            href={router?.asPath.includes("#search_products") ? router?.asPath : router?.asPath + "#search_products"}
            >
                <img src={imageUrl} alt="Image" className="w-full h-auto" />
                <div
                     className={`text-slit absolute bottom-0 left-0 right-0 p-2 bg-black text-white text-center ${ isHovered ? 'opacity-1' : 'opacity-0'} transition-opacity duration-300 ease-in-out`}>
                    {linkText}
                </div>
            </a>
        </div>
    );
};

export default ImageWithTextSlit;
