import { Page } from "@playwright/test"
import { LocatorInfo } from "../locate/locator-info"
import { FindBy } from "../locate/findby"
import { WebPage } from "./webpage"

export class PageSection extends WebPage {
    constructor(page: Page, protected scope: LocatorInfo) {
        super(page)
    }

    protected override find(findBy: FindBy): LocatorInfo {
        return {
            selector: findBy,
            page: this.page,
            parent: this.scope.parent
                ? this.scope.parent.concat(this.scope.selector)
                : [this.scope.selector]
        }
    }

    protected override findWithIn(parentLocatorInfo: LocatorInfo) {
        const page = this.page
        const pageScope = this.scope
        return {
            by(selector: FindBy): LocatorInfo {
                const parentScope =
                    //
                    (pageScope.parent ?? [])
                        .concat(
                            pageScope.selector,
                            parentLocatorInfo.parent ?? [],
                            parentLocatorInfo.selector
                        )

                return {
                    selector,
                    page: page,
                    parent: parentScope,
                }
            },
        }
    }
}