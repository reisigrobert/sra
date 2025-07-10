// Chart.js - CDN Loader
// For offline use: Replace this file with the library from https://www.chartjs.org/
// Download: https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js

(function() {
    // Check if already loaded
    if (typeof Chart !== 'undefined') {
        return;
    }
    
    // Create promise for this library
    window.libraryLoader = window.libraryLoader || {};
    window.libraryLoader.chartjs = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
        script.onload = () => {
            console.log('Chart.js loaded successfully');
            resolve();
        };
        script.onerror = () => {
            console.error('Failed to load Chart.js. For offline use, download the library from https://www.chartjs.org/');
            reject(new Error('Failed to load Chart.js'));
        };
        document.head.appendChild(script);
    });
})();
