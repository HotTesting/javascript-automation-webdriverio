/// <reference types="webdriverio" />
declare namespace WebdriverIO {
  interface Client<T> {
    /**
     * Wait for element to contain text, wrapper around .waitUntil
     * Declared in webdriverio.conf.js with browser.addCommand
     */
    waitForTextToAppear(params: {
      selector: string;
      text: string;
      timeout?: number;
      timeoutMsg?: string;
      interval?: number;
    }): WebdriverIO.Client<T>;

    getUrlAndTitle(somevar): WebdriverIO.Client<T>;
  }
}
