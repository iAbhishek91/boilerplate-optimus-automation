import { Before, setDefaultTimeout } from 'cucumber';
import { errorLog } from '../../support/logger';
import remoteWebdriverIO from '../../support/webdriverIO/remoteWebdriverIO';

Before({ timeout: 60 * 1000 }, async function () {
  try {
    const browser = await remoteWebdriverIO();
    browser.deleteAllCookies();
    browser.maximizeWindow();
    setDefaultTimeout(90 * 1000);

    global.browser = browser;
  } catch (error) {
    if (error.message.includes('ECONNREFUSED')) {
      // eslint-disable-next-line max-len
      errorLog(`Before hook failed! Selenium server is not reachable. Error message: ${error.message}`);
    } else {
      errorLog(`Before hook failed! Error message ${error.message}`);
    }
  }
});
