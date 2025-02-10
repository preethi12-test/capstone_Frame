import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const InputInteractions = (locatorInfo: LocatorInfo) => {
    return {
        fill(value: string) {
            return getLocator(locatorInfo).fill(value)
        },

        clear() {
            return getLocator(locatorInfo).clear()
        }
    }
}
