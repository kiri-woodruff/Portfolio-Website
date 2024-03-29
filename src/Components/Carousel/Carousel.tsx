import React, {useState} from 'react';
import './Carousel.scss'
import arrow from '../../Assets/carousel-arrow-left.svg'
import arrowRight from '../../Assets/carousel-arrow-right.svg'

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='carousel-container'>
            <div className='arrow-container'>
                <button onClick={prevImage}><img src={arrow} alt="<"/></button>
                <div className='carousel'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{display: index === currentIndex ? 'block' : 'none'}}
                        />
                    ))}
                </div>
                <button onClick={nextImage}><img src={arrowRight} alt=">"/></button>
            </div>
            <div className="dot-container">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
