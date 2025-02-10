import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const ElementStates = (locatorInfo: LocatorInfo) => {
    return {
        isEnabled(timeout?: number) {
            return getLocator(locatorInfo).isEnabled({ timeout })
        },

        isHidden(timeout?: number) {
            return getLocator(locatorInfo).isHidden({ timeout })
        },

        isVisible(timeout?: number) {
            return getLocator(locatorInfo).isVisible({ timeout })
        },

        isDisabled(timeout?: number) {
            return getLocator(locatorInfo).isDisabled({ timeout })
        },

        isEditable(timeout?: number) {
            return getLocator(locatorInfo).isEditable({ timeout })
        },
    }
}
