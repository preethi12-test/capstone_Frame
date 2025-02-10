import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const InputInteractions = (locatorInfo: LocatorInfo) => {
    return {
        fill(value: string) {
            return getLocator(locatorInfo).fill(value)
        },

        clear() {
            return getLocator(locatorInfo).clear()
        },

        pressSequentially(value: string, delay?: number) {
            return getLocator(locatorInfo).pressSequentially(value, { delay })
        },

        press(key: string, delay?: number) {
            return getLocator(locatorInfo).press(key, { delay })
        },

        blur() {
            return getLocator(locatorInfo).blur()
        },
    }
}
