import { CheckInteractions } from './mixins/check-interactions'
import { composeElement } from './mixins/compose-element'
import { WebElement } from './web-element'

export const Checkbox = composeElement(WebElement, CheckInteractions)
