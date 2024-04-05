const collectPerformanceData = () => {
    const pageLoadTiming = window.performance.timing;
    const pageLoadTime = pageLoadTiming.loadEventEnd - pageLoadTiming.navigationStart;
  
    const resourceTimingEntries = window.performance.getEntriesByType('resource');
    const resourceLoadTimes = resourceTimingEntries
      .map(entry => ({
        name: entry.name,
        loadTime: entry.duration
      }));
  
    return {
      pageLoadTime,
      resourceLoadTimes
    };
  };
  
  export default collectPerformanceData;
  