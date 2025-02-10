import { TextBox, WebElement, WebPage } from "shared-lib";
const productData = JSON.parse(
  JSON.stringify(
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("/Users/testvagrant/Desktop/code_Ultra/packages/frontend/data/uat/contact_details.json")
  )
);
export class ContactsPage extends WebPage {
  private contactPageTitle = this.find({ xpath: `//span[normalize-space()='Contact']` });
  private name=this.find({xpath:`//input[@id='ContactForm-name']`})
  private email=this.find({css:`#ContactForm-email`})
  private phone=this.find({css:`#ContactForm-phone`})
  private submitBtn=this.find({css:`button[class='button']`})

  async contactPage() {
    await WebElement(this.contactPageTitle).isVisible();
  }
  async addContactDetails()
  {
    await TextBox(this.name).fill(productData.name)
    await TextBox(this.email).fill(productData.email)
    await TextBox(this.phone).fill(productData.phone)
    await WebElement(this.submitBtn).click()
  }
}
