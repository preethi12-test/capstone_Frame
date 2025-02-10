import { Page } from '@playwright/test'
import { FindBy } from '../locate/findby'
import { LocatorInfo } from '../locate/locator-info'
import { ElementCollection } from '../actions/element-collection'
import { PageSection } from './page-section'
import { WebElement } from '../actions/web-element'

export class WebPage {
    constructor(protected page: Page) { }

    protected find(findBy: FindBy): LocatorInfo {
        return {
            selector: findBy,
            page: this.page
        }
    }

    protected findWithIn(parentLocatorInfo: LocatorInfo) {
        const page = this.page
        return {
            by(selector: FindBy): LocatorInfo {
                const scope =
                    //
                    (parentLocatorInfo.parent ?? [])
                        .concat(parentLocatorInfo.selector)

                return {
                    selector,
                    page: page,
                    parent: scope,
                }
            },
        }
    }

    protected async waitForLoadingComplete() {
        try {
            const loader = ElementCollection(this.find({ text: 'Loading...' }))
            await loader.waitForStateOfAllElementsToBe('hidden')
        } catch (error) {
            console.error('Handled Error: Page loading not completed within 60s')
            console.log(error)
        }
    }

    protected async waitForNetworkIdle({ timeout = 60000 }: { timeout?: number } = {}) {
        await this.page.waitForLoadState('networkidle', { timeout })
    }

    protected async waitForLoadComplete({ timeout = 60000 }: { timeout?: number } = {}) {
        await this.page.waitForLoadState('load', { timeout })
    }

    protected async waitForDomContentLoaded({ timeout = 60000 }: { timeout?: number } = {}) {
        await this.page.waitForLoadState('domcontentloaded', { timeout })
    }

    protected async pageSectionCollection<T extends PageSection>(
        ctor: new (page: Page, scope: LocatorInfo) => T,
        locatorInfo: LocatorInfo
    ): Promise<T[]> {
        const elements = await ElementCollection(locatorInfo).getElements(WebElement)
        const sectionCollection: T[] = []
        for (let counter = 0; counter < elements.length; counter++) {
            sectionCollection.push(new ctor(this.page, {
                selector: { ...locatorInfo.selector, nth: counter },
                page: locatorInfo.page,
                parent: locatorInfo.parent
            }))
        }

        return sectionCollection
    }
}
