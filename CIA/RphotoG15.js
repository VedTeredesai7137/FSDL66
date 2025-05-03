import React, { useState } from 'react';

const images = [
  { id: 1, src: 'https://via.placeholder.com/150', category: 'nature' },
  { id: 2, src: 'https://via.placeholder.com/150', category: 'architecture' },
  { id: 3, src: 'https://via.placeholder.com/150', category: 'nature' },
  { id: 4, src: 'https://via.placeholder.com/150', category: 'city' },
  { id: 5, src: 'https://via.placeholder.com/150', category: 'architecture' },
  { id: 6, src: 'https://via.placeholder.com/150', category: 'city' },
];

function PhotoGallery() {
  const [category, setCategory] = useState('all');

  const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Photo Gallery</h1>
      <button onClick={() => setCategory('all')} style={{ padding: '10px', margin: '10px' }}>All</button>
      <button onClick={() => setCategory('nature')} style={{ padding: '10px', margin: '10px' }}>Nature</button>
      <button onClick={() => setCategory('architecture')} style={{ padding: '10px', margin: '10px' }}>Architecture</button>
      <button onClick={() => setCategory('city')} style={{ padding: '10px', margin: '10px' }}>City</button>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredImages.map(image => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.src} alt={image.category} style={{ width: '150px', height: '150px', borderRadius: '8px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
