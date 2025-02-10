import { HeaderSection } from "@pages/common/header-section";
import { ContactsPage } from "@pages/contacts/contacts-page";
import { LoginPage } from "@pages/login/login-page";
import test from "@playwright/test";

test.describe('Contact Spec', { tag: ['@smoke'] }, () => {
  test('Validate ContactPage', async ({ page}) => {
    const header = new HeaderSection(page)
    const welcome= new LoginPage(page)
    const contact= new ContactsPage(page)
    await welcome.navigateToLoginPage()
    await header.navigateToContactPage()
    await contact.addContactDetails()
  })
})
