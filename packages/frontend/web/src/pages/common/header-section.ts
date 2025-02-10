import { WebElement, WebPage } from "shared-lib";
import { HomePage } from "@pages/home/home-page";
import { ContactsPage } from "@pages/contacts/contacts-page";
import { StorePage } from "@pages/store/store-page";

export class HeaderSection extends WebPage {
  private homeNav = this.find({ xpath: `//span[@class='header__active-menu-item']`});
  private storeNav = this.find({ xpath: `//span[normalize-space()='Store']` });
  private contactNav = this.find({ xpath: `//span[normalize-space()='Contact']` });

  async navigateToHomePage() {
    await WebElement(this.homeNav).click();
    return new HomePage(this.page);
  }

  async navigateToStoorePage() {
    await WebElement(this.storeNav).click();
    return new StorePage(this.page);
  }

  async navigateToContactPage() {
    await WebElement(this.contactNav).click();
    return new ContactsPage(this.page);
  }
  homeDisplayed() {
    return WebElement(this.homeNav).isVisible();
  }

  storeDisplayed() {
    return WebElement(this.storeNav).isVisible();
  }

  contactDisplayed() {
    return WebElement(this.contactNav).isVisible();
  }
}
