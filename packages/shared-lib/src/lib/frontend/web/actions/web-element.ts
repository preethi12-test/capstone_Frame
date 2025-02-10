import { composeElement } from './mixins/compose-element'
import { ElementActions } from './mixins/element-actions'
import { ElementAttributes } from './mixins/element-attributes'
import { ElementStates } from './mixins/element-states'
import { WaitForElementState } from './mixins/wait-for-element-state'

export const WebElement = composeElement(ElementActions, ElementAttributes, ElementStates, WaitForElementState)
