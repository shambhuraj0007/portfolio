import { useEffect, useState } from "react";

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0);
  const [memory, setMemory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measurePerformance = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }

      // Get memory usage if available
      if (performance.memory) {
        setMemory(Math.round(performance.memory.usedJSHeapSize / 1024 / 1024));
      }

      animationId = requestAnimationFrame(measurePerformance);
    };

    measurePerformance();

    // Toggle visibility with 'P' key
    const handleKeyPress = (e) => {
      if (e.key === 'p' || e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-3 rounded-lg z-50 text-sm font-mono">
      <div>FPS: {fps}</div>
      {memory > 0 && <div>Memory: {memory}MB</div>}
      <div className="text-xs text-gray-400 mt-1">Press 'P' to toggle</div>
    </div>
  );
};

export default PerformanceMonitor; 