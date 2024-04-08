import React, { useState, useEffect, useRef } from 'react';
import './Gallery.scss';

const Gallery = () => {
 const [selectedImageIndex, setSelectedImageIndex] = useState(null);
 const images = [
    
    { src: 'https://i.ibb.co/T1MtFLL/champ.jpg', alt: 'Image 1' },
    { src: 'https://i.ibb.co/jzNGJgv/kalathilakam.jpg', alt: 'Image 2' },
    { src: 'https://i.ibb.co/Syb5vqs/prathibha.jpg', alt: 'Image 3' },
    { src: 'https://i.ibb.co/MDndsNz/sargaprathibha.jpg', alt: 'Image 4' },
 ];

 const handleImageClick = (index) => {
    setSelectedImageIndex(index);
 };

 const handleNext = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
 };

 const handlePrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
 };

 const handleClose = () => {
    setSelectedImageIndex(null);
 };

 const zoomedPhotoRef = useRef(null);

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (zoomedPhotoRef.current && !zoomedPhotoRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
 }, [zoomedPhotoRef]);

 return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleImageClick(index)}
            className={selectedImageIndex === index ? 'selected' : ''}
          />
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="zoomed-photo" ref={zoomedPhotoRef}>
          <img src={images[selectedImageIndex].src} alt={images[selectedImageIndex].alt} />
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
 );
};

export default Gallery;
