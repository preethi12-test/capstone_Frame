import { composeElement } from './mixins/compose-element'
import { InputInteractions } from './mixins/input-interactions'
import { WebElement } from './web-element'

export const TextBox = composeElement(WebElement, InputInteractions)
