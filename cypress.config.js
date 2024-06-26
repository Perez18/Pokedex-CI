const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // defaultCommandTimeout: 5000,
  video:false,
  viewportWidth: 1000,
  viewportHeight: 600,
  // Viewport settings overridden for component tests
  component: {
    viewportWidth: 500,
    viewportHeight: 500,
  },
  // Command timeout overridden for E2E tests
  e2e: {
    // defaultCommandTimeout: 10000,
    supportFile: false,
  },
})