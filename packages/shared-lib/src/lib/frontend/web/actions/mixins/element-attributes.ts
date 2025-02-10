import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const ElementAttributes = (locatorInfo: LocatorInfo) => {
    return {
        async textContent() {
            return (await getLocator(locatorInfo).textContent())?.trim()
        },

        innerText() {
            return getLocator(locatorInfo).innerText()
        },

        getAttribute(attributeName: string) {
            return getLocator(locatorInfo).getAttribute(attributeName)
        },
    }
}
