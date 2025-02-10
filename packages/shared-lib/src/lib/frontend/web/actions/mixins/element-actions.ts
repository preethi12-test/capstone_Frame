import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

export const ElementActions = (locatorInfo: LocatorInfo) => {
    return {
        click() {
            return getLocator(locatorInfo).click()
        },

        rightClick() {
            return getLocator(locatorInfo).click({ button: 'right' })
        },

        doubleClick() {
            return getLocator(locatorInfo).dblclick()
        },

        clickAtPosition(position: { x: number; y: number }) {
            return getLocator(locatorInfo).click({ position })
        },

        scrollIntoView() {
            return getLocator(locatorInfo).scrollIntoViewIfNeeded()
        },

        hover() {
            return getLocator(locatorInfo).hover()
        },

        hoverAtPosition(position: { x: number; y: number }) {
            return getLocator(locatorInfo).hover({ position })
        },
    }
}
