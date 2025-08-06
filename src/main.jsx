import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

// Register service worker for caching and offline support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
  const criticalResources = [
    '/images/bg.png',
    '/images/fav.png',
    '/models/optimized-room.glb'
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = resource.endsWith('.glb') ? 'fetch' : 'image';
    link.href = resource;
    document.head.appendChild(link);
  });
};

// Initialize performance optimizations
preloadCriticalResources();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
