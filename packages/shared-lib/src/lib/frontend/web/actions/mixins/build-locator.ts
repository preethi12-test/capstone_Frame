import { LocatorBuilder } from '../../locate/locator-builder'
import { LocatorInfo } from '../../locate/locator-info'

export const getLocator = (locatorInfo: LocatorInfo) => LocatorBuilder(locatorInfo).build()
