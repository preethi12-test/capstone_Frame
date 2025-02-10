import { Locator } from '@playwright/test'
import { WebElement } from './web-element'
import { getLocator } from './mixins/build-locator'
import { LocatorInfo } from '../locate/locator-info'

export const ElementCollection = <T extends ReturnType<typeof WebElement>>(locatorInfo: LocatorInfo) => {
    return {
        async getElements(composeFn: (locatorInfo: LocatorInfo) => T) {
            const locator = getLocator(locatorInfo)
            await locator.nth(0).waitFor({ state: 'attached', timeout: 60000 })
            const locators: Locator[] = await locator.all()
            const count = locators.length

            const elementCollection: T[] = []

            for (let counter = 0; counter < count; counter++) {
                const currentLocator: LocatorInfo = {
                    selector: { ...locatorInfo.selector, nth: counter },
                    parent: locatorInfo.parent,
                    page: locatorInfo.page
                }

                const element = composeFn(currentLocator)
                elementCollection.push(element)
            }

            return elementCollection
        },

        async getTextContents() {
            const elements = await ElementCollection(locatorInfo).getElements(WebElement)
            const textContents: string[] = []
            if (elements.length > 0) {
                for (const element of elements) {
                    textContents.push((await element.textContent()) ?? '')
                }
            }

            return textContents
        },

        async waitForStateOfAllElementsToBe(state: 'visible' | 'hidden' | 'detached' | 'attached', timeout = 60000) {
            const locator = getLocator(locatorInfo)
            const locators: Locator[] = await locator.all()

            for (const locator of locators) {
                try {
                    if (locator) await locator.waitFor({ state, timeout })
                } catch (error) {
                    console.error(`Error waiting for Selector: ${locator} state: ${state}.\n${error}`)
                }
            }
        },
    }
}
