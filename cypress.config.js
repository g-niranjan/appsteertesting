const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa.appsteer.io/#/login",
    experimentalStudio: true,
    expermentalSessionAndOrigin : true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
