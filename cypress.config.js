const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig ({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    apiKey: '<APIKEY_hJ_6x99vRRSdWz9zNti6ta02uXgPhR6C7ltg7UXJWN_SJhxWkjFYa6Viq5W1JvEK>',
    endpoint: 'https://demo.reportportal.io/api/v1',
    project: 'lucaskschmitt_personal',
    launch: 'Testes em cypress',
    description: 'Testes EBAC',
    attributes: [
      {
        key: 'attributeKey',
        value: 'attributeValue',
      },
      {
        value: 'anotherAttributeValue',
      },
    ],
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
