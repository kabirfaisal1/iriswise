import { defineConfig } from "cypress";

export default defineConfig( {

  e2e: {
    specPattern: "test/cypress/**/**/*.cy.{js,jsx,ts,tsx}",
    downloadsFolder: "test/cypress/downloads",

    // src/test/cypress/e2e/spec.cy.ts
    screenshotOnRunFailure: false,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: "**/support/e2e.ts",
    setupNodeEvents ( on, config )
    {
      const version = config.env.version || 'local';
      const url = {
        local: "http://localhost:5173/",
        staging: "https://google.com",
        production: "https://amazon.com"
      };
      config.baseUrl = url[ version ];
      return config;
    },

  },
} );
