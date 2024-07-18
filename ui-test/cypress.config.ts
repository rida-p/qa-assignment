import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'report/mochawesome-specs',
      overwrite: false,
      html: false,
      json: true,
      embeddedScreenshots: true,
      inlineAssets: true
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
