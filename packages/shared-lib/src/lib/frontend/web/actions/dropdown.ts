import { composeElement } from './mixins/compose-element'
import { SelectInteractions } from './mixins/select-interactions'
import { WebElement } from './web-element'

export const Dropdown = composeElement(WebElement, SelectInteractions)
