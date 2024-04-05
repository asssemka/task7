import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import PerformanceData from './components/PerformanceData';
import Modal from './components/Modal';
import './App.css'

const App = () => {
  const [isPerformanceModalOpen, setIsPerformanceModalOpen] = useState(false);

  const openPerformanceModal = () => {
    setIsPerformanceModalOpen(true);
  };

  const closePerformanceModal = () => {
    setIsPerformanceModalOpen(false);
  };

  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>Image Gallery</h1>
      <ImageGallery />
      <button onClick={openPerformanceModal}>Show Performance Data</button>
      <Modal isOpen={isPerformanceModalOpen} onClose={closePerformanceModal}>
        <PerformanceData />
      </Modal>
    </div>
  );
};

export default App;
