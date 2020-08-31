// jest.setup.js

Object.assign(global, require('jest-chrome'));
global.fetchMock = require('fetch-mock-jest');

// in firefox, content scripts cannot make fetch requests to relative URLs
// content.fetch must be used instead. We stub it here to mock the browser function.
global.content = {
  ...global.content,
  fetch: jest.fn(() =>
    Promise.resolve({
      blob: () => Promise.resolve(new Blob(['text!'], { type: 'text/html' })),
      text: () => Promise.resolve('text!'),
    })
  ),
};

// only allow console.debug through
global.console = {
  debug: console.debug,
  log: jest.fn(),
  error: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
};
