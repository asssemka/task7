import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleImage from './SingleImage';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: '6vA_u6ak0_YSrtYkxe9ybNB_yOIbGyYOJmkc0A9zkzs', // Вставьте ваш API ключ
            per_page: 10
          }
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <div className="image-gallery" style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      {images.map(image => (
        <SingleImage
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          preload={image.preload} // Предзагрузка критически важных изображений
        />
      ))}
    </div>
  );
};

export default ImageGallery;
