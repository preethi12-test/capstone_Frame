import { WebElement, WebPage } from "shared-lib";

export class HomePage extends WebPage {
  private productTitle = this.find({
    xpath: `//span[@class='header__active-menu-item']`,
  });

  async navigateToHomePage() {
    await WebElement(this.productTitle).isVisible();
  }
}
