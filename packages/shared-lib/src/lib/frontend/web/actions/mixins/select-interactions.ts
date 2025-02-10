import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const SelectInteractions = (locatorInfo: LocatorInfo) => {
    return {
        selectByLabel(label: string) {
            return getLocator(locatorInfo).selectOption({ label })
        },

        selectByValue(value: string) {
            return getLocator(locatorInfo).selectOption({ value })
        },

        selectByIndex(index: number) {
            return getLocator(locatorInfo).selectOption({ index })
        },

        getAllOptions() {
            return getLocator(locatorInfo).allTextContents()
        },
    }
}
