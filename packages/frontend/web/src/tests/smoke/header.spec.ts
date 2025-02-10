import { LoginPage } from '@pages/login/login-page'
import { HeaderSection } from '@pages/common/header-section'
import test, { expect } from '@playwright/test'
test.describe('Header Spec', { tag: ['@smoke'] }, () => {
    test('Validate Header', async ({ page}) => {
        const welcome= new LoginPage(page)
        const header = new HeaderSection(page)
        await welcome.navigateToLoginPage()

        const homeDisplayed = await header.homeDisplayed()
        const storeDisplayed = await header.storeDisplayed()
        const contactDisplayed = await header.contactDisplayed()

        expect.soft(homeDisplayed, 'Validate Home Nav is displayed').toBeTruthy()
        expect.soft(storeDisplayed, 'Validate Store Nav is displayed').toBeTruthy()
        expect.soft(contactDisplayed, 'Validate Contact Nav is displayed').toBeTruthy()
    })
})
