// playwright.config.js
module.exports = {
  timeout: 60000, // Increase test timeout to 60 seconds
  use: {
    baseURL: 'https://marsair.recruiting.thoughtworks.net/HoangPham',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 30000,
    actionTimeout: 15000,
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
  ],
};
