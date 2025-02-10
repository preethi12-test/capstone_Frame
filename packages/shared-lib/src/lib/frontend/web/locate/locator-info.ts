import { Page } from '@playwright/test'
import { FindBy } from './findby'

export type LocatorInfo = {
    selector: FindBy,
    parent?: FindBy[] | undefined
    page: Page
}
