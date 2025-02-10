import { WebElement, WebPage } from "shared-lib";

export class StorePage extends WebPage {
  private storeTitle = this.find({ xpath: `//span[normalize-space()='Store']`});

  totalEarned() {
    return WebElement(this.storeTitle).isVisible();
  }
}
