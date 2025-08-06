// Performance optimization utilities

// Debounce function for expensive operations
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  });
};

// Performance monitoring
export const measurePerformance = (name, fn) => {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
  return result;
};

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (performance.memory) {
    return {
      used: Math.round(performance.memory.usedJSHeapSize / 1024 / 1024),
      total: Math.round(performance.memory.totalJSHeapSize / 1024 / 1024),
      limit: Math.round(performance.memory.jsHeapSizeLimit / 1024 / 1024)
    };
  }
  return null;
};

// Optimize images
export const optimizeImage = (src, width = 800) => {
  // Add width parameter for responsive images
  return `${src}?w=${width}&q=80`;
};

// Preload critical resources
export const preloadResource = (href, as = 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
};

// Optimize scroll performance
export const optimizeScroll = (element) => {
  if (element) {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)';
  }
};

// Clean up performance optimizations
export const cleanupPerformance = (element) => {
  if (element) {
    element.style.willChange = 'auto';
  }
};

// Check if device is low-end
export const isLowEndDevice = () => {
  const memory = getMemoryUsage();
  const isMobile = window.innerWidth <= 768;
  const hasLowMemory = memory && memory.total < 512; // Less than 512MB
  
  return isMobile || hasLowMemory;
};

// Reduce motion based on user preference
export const shouldReduceMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device capability
export const getOptimizedAnimationConfig = () => {
  const isLowEnd = isLowEndDevice();
  const reduceMotion = shouldReduceMotion();
  
  return {
    duration: reduceMotion ? 0 : (isLowEnd ? 0.3 : 0.5),
    easing: reduceMotion ? 'linear' : 'cubic-bezier(0.4, 0, 0.2, 1)',
    enabled: !reduceMotion
  };
}; 