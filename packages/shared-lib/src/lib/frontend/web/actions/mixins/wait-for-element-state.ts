import { LocatorInfo } from '../../locate/locator-info'
import { getLocator } from './build-locator'

type WaitOptions = {
    timeout?: number
    throwErrorOnfailure?: boolean
}

export const WaitForElementState = (locatorInfo: LocatorInfo) => {
    return {
        async waitForVisibility({ timeout = 30000, throwErrorOnfailure = true }: WaitOptions = {}) {
            try {
                await getLocator(locatorInfo).waitFor({ state: 'visible', timeout })
                return true
            } catch (error) {
                if (throwErrorOnfailure) throw error
                else {
                    console.warn(`Handled error: ${error}`)
                    return false
                }
            }
        },

        async waitForHidden({ timeout = 30000, throwErrorOnfailure = true }: WaitOptions = {}) {
            try {
                await getLocator(locatorInfo).waitFor({ state: 'hidden', timeout })
                return true
            } catch (error) {
                if (throwErrorOnfailure) throw error
                else {
                    console.warn(`Handled error: ${error}`)
                    return false
                }
            }
        },

        async waitForAttached({ timeout = 30000, throwErrorOnfailure = true }: WaitOptions = {}) {
            try {
                await getLocator(locatorInfo).waitFor({ state: 'attached', timeout })
                return true
            } catch (error) {
                if (throwErrorOnfailure) throw error
                else {
                    console.warn(`Handled error: ${error}`)
                    return false
                }
            }
        },

        async waitForDetached({ timeout = 30000, throwErrorOnfailure = true }: WaitOptions = {}) {
            try {
                await getLocator(locatorInfo).waitFor({ state: 'detached', timeout })
                return true
            } catch (error) {
                if (throwErrorOnfailure) throw error
                else {
                    console.warn(`Handled error: ${error}`)
                    return false
                }
            }
        },
    }
}
