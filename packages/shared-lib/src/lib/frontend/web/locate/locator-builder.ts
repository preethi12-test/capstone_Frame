import { Locator, Page } from '@playwright/test'
import { FindBy, FindByRole } from './findby'
import { LocatorInfo } from './locator-info'

export const LocatorBuilder = (locatorInfo: LocatorInfo) => {
    const locatorHandlers = (root: Page | Locator) => {
        return {
            id: (value: string) =>
                value.startsWith('*')
                    ? root.locator(`[id*='${value.slice(1)}']`)
                    : root.locator(`#${value}`),

            name: (value: string) =>
                value.startsWith('*')
                    ? root.locator(`[name*='${value.slice(1)}']`)
                    : root.locator(`[name='${value}']`),

            text: (value: string) =>
                value.startsWith('*')
                    ? root.getByText(value.slice(1), { exact: false })
                    : root.getByText(value),

            testId: (value: string) =>
                value.startsWith('*')
                    ? root.locator(`[data-testid*='${value.slice(1)}']`)
                    : root.getByTestId(value),

            label: (value: string) =>
                value.startsWith('*')
                    ? root.getByLabel(value.slice(1), { exact: false })
                    : root.getByLabel(value, { exact: true }),

            xpath: (value: string) => root.locator(`xpath=${value}`),

            css: (value: string) => root.locator(value),

            role: (roleInfo: FindByRole) => root.getByRole(roleInfo.role, roleInfo.options),
        } as const
    }

    /**
     * Construct the locator based on the FindBy object
     * @param findBy The findBy object
     */
    const constructLocator = (
        findBy: FindBy,
        parent: Page | Locator = locatorInfo.page
    ): Locator => {
        const handlers = locatorHandlers(parent);

        const [key, value] = Object.entries(findBy)[0] as [keyof typeof handlers, string | FindByRole];

        return key === 'role'
            ? handlers[key](value as FindByRole)
            : handlers[key](value as string);
    };

    return {
        build() {
            let root: Page | Locator = locatorInfo.page

            if (locatorInfo.parent) {
                locatorInfo.parent.forEach((parent: FindBy) => {
                    const locator = constructLocator(parent, root)
                    root = parent.nth !== undefined ?
                        (parent.nth === -1 ? locator.last() : locator.nth(parent.nth)) :
                        locator
                })
            }

            const selector = locatorInfo.selector
            let locator = constructLocator(selector, root)
            locator = selector.nth !== undefined ?
                (selector.nth === -1 ? locator.last() : locator.nth(selector.nth)) :
                locator
            return locator
        },
    }
}
