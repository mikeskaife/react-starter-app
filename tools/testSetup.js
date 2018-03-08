// This file is written in ES5 since it's not transpiled by Babel.
// This file does the following:
// 1. Sets Node environment variable accordingly.
// 2. Registers Babel for transpiling code for testing.
// 3. Disables some Webpack features that Mocha doesn't understand.
// 4. Requires jsdom to enable testing via an in-memory DOM in Node.
// 5. Sets up global vars that fake a browser.

/* eslint-disable no-var*/

/* This setting ensures the .babelrc dev config doesn't apply for tests.
 Don't set this to 'production' because:
 a. PropType validation warnings are not displayed in prod mode.
 b. Detailed test error messages are not displayed in prod mode.
 */
process.env.NODE_ENV = 'test';

// Register Babel to transpile ES6 to ES5 before running tests.
require('babel-register')();

// Disable Webpack features for tests that Mocha doesn't understand.
require.extensions['.css'] = function () {return null;};
require.extensions['.png'] = function () {return null;};
require.extensions['.jpg'] = function () {return null;};

// Configure JSDOM and set global variables for fake DOM.
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
