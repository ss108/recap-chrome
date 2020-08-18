// jest.setup.js

Object.assign(global, require('jest-chrome'));
require('jest-fetch-mock').enableMocks();
