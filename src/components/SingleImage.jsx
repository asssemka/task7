import React, { useState, useEffect, useRef } from 'react';

const SingleImage = ({ src, alt, preload }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => {
      observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <img
      src={isVisible ? src : ''}
      alt={alt}
      ref={imageRef}
      loading="lazy" // Ленивая загрузка изображений
      crossOrigin="anonymous" // Разрешить загрузку изображений с других доменов для анализа производительности
      rel={preload ? 'preload' : null} // Предзагрузка критически важных изображений
      width='500px'
      height='auto'
    />
  );
};

export default SingleImage;
