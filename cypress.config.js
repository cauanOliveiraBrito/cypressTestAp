const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o2j3ir',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    testIsolation: false
  },
  "reporter": "cypress-mochawesome-reporter"
}

);
