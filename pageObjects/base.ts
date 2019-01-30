export class BasePage {
  open() {
    throw new Error("Not implemented!");
  }
  isLoaded(condition) {
    try {
      browser.waitUntil(condition, 10000);
      return true;
    } catch (err) {
      return false;
    }
  }
}
