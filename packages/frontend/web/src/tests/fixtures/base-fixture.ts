// import { test as base, expect, Page } from '@playwright/test'
// import proxymise from 'proxymise'
// import { RandomGenerator } from 'shared-lib'
// import { WelcomePage } from '@pages/auth/welcome-page'
// import { HeaderSection } from '@pages/common/header-section'
// import { SignoutPage } from '@pages/auth/signout-page'
// import { UserInfo } from '@pages/auth/models/user-info'
// import { WebAppDataClient } from '@utils/test-data-client'

// const test = base.extend<{
//     login: (user?: UserInfo) => Promise<UserInfo>
//     goBack: <T>(webpage: new (scope: Page) => T) => Promise<T>
// }>({
//     login: async ({ page }, use) => {
//         let signinSuccessful = false
//         const login = async (userInfo?: UserInfo) => {
//             const user: UserInfo =
//                 userInfo ||
//                 RandomGenerator.getRandomItemFromArray(
//                     WebAppDataClient().getDataFromJSON<UserInfo[]>(`${process.env['USER_FILE'] ?? 'users'}`)
//                 )

//             await proxymise(new WelcomePage(page))
//                 //
//                 .navigate()
//                 .continueWithHealthSafeID()
//                 .login(user)

//             signinSuccessful = true
//             return user
//         }

//         await use(login)

//         if (signinSuccessful) {
//             await proxymise(new HeaderSection(page))
//                 //
//                 .navigateToAccountPage()
//                 .leftBarSection()
//                 .logout()

//             await new SignoutPage(page).waitUntilStable()
//         }

//         const filteredErrors = test
//             .info()
//             .errors.filter((err) => !err.message?.toLowerCase()?.includes('handled error'))

//         if (filteredErrors.length > 0) {
//             throw new Error(filteredErrors.map((err) => err.message).join('\n'));
//         }
//     },
//     goBack: async ({ page }, use) => {
//         const navigateBack = async <T>(webpage: new (scope: Page) => T) => {
//             await page.goBack()
//             await page.waitForLoadState('load', { timeout: 30000 })
//             return new webpage(page)
//         }

//         await use(navigateBack)
//     },
// })

// export { test, expect }
