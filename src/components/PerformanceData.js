import React, { useState, useEffect } from 'react';
import collectPerformanceData from '../utils/performance';


const PerformanceData = () => {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    // Сбор данных о производительности при монтировании компонента
    const data = collectPerformanceData();
    setPerformanceData(data);
  }, []);

  return (
    <div className="performance-data" style={{overflow: 'hidden'}}>
      <h2>Performance Data</h2>
      {performanceData && (
        <div>
          <p>Page Load Time: {performanceData.pageLoadTime} ms</p>
          <h3>Image Load Times:</h3>
          <ul>
            {performanceData.resourceLoadTimes.map(resource => (
              <li key={resource.name}>Image URL: {resource.name}, Load Time: {resource.loadTime} ms</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceData;
