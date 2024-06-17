import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image, { StaticImageData } from 'next/image';
import './portfolio.css';

interface ProjectImageProps {
    thumbs: StaticImageData[] | null | undefined;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ thumbs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);

    const handleImageClick = (image: StaticImageData) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeOverlay = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    if(thumbs) {
        return (
            <div className="project__image__container">
                <Carousel
                    infiniteLoop={true}
                    showThumbs={true}
                >
                    {thumbs.map((thumb, idx) => (
                        <div key={idx} className="carousel-image-container" onClick={() => handleImageClick(thumb)}>
                            <Image src={thumb} alt={`Project thumbnail ${idx}`} layout="fill" objectFit="contain" className="carousel-image"/>
                        </div>
                    ))}
                </Carousel>
                {isOpen && selectedImage && (
                    <div className="overlay" onClick={closeOverlay}>
                        <div className="overlay__content">
                            <Image className="overlay__img" src={selectedImage}  alt="Selected project thumbnail" layout="responsive"/>
                        </div>
                    </div>
                )}
            </div>
        );
    }
    else return null;
};

export default ProjectImage;
