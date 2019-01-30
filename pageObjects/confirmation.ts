import { BasePage } from './base';
export class Confirmation extends BasePage {
  private titleText: string = "h1.title";
  
  isLoaded() {
    return super.isLoaded(()=> browser.isVisible(this.titleText))
  }

  confirmationTitle(): string {
    browser.waitForVisible(this.titleText, 5000);
    return $(this.titleText).getText();
  }
}

export const confirmation = new Confirmation();
