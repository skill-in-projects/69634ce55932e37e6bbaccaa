// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi69634ce55932e37e6bbaccaa-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
