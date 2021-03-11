export const IS_YN = {
  Y: 'yes', N: 'no',
};

export const OUTPUT_DIRECTORY_NAME = 'output';

export const SCREENSHOT_DIRECTORY_NAME = 'screenshots';

// refer official docs of webdriberIO option object structure.
// https://webdriver.io/docs/options.html
export const WEBDRIVERIO_OPTION = {
  protocol: 'http',
  hostname: 'localhost',
  port: 4444,
  path: '/wd/hub',
  queryParams: null,
  logLevel: 'silent',
  capabilities: {
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: [],
    },
  },
};
