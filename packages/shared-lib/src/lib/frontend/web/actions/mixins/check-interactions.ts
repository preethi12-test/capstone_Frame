import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const CheckInteractions = (locatorInfo: LocatorInfo) => {
    return {
        check() {
            return getLocator(locatorInfo).check()
        },

        checkAtPosition(position: { x: number; y: number }) {
            return getLocator(locatorInfo).check({ position })
        },

        uncheck() {
            return getLocator(locatorInfo).uncheck()
        },

        uncheckAtPosition(position: { x: number; y: number }) {
            return getLocator(locatorInfo).uncheck({ position })
        },

        isChecked() {
            return getLocator(locatorInfo).isChecked()
        },
    }
}
