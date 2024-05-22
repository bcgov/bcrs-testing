const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('task', {
        deleteDownloadsFolder() {
          return new Promise((resolve, reject) => {
            fs.rmdir(path.join(__dirname, '....', 'downloads'), { maxRetries: 10, recursive: true }, (err) => {
              if (err) {
                console.error(err);
                return reject(err);
              }
              resolve(null);
            });
          });
        },
      });
    },
  },
});