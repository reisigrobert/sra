// Chart.js - CDN Loader
// For offline use: Replace this file with the library from https://www.chartjs.org/
// Download: https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js

(function() {
    // Load Chart.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.js';
    script.onerror = function() {
        console.error('Failed to load Chart.js. For offline use, download the library from https://www.chartjs.org/');
        alert('Chart.js library failed to load. Check your internet connection or download the library for offline use.');
    };
    document.head.appendChild(script);
})();
