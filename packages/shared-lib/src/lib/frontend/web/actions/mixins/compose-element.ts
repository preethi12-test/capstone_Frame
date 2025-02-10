/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { LocatorInfo } from "../../locate/locator-info"

export type MixinFunction<T = {}> = (locatorInfo: LocatorInfo) => T

export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never

export function composeElement<TMixins extends MixinFunction[]>(
    ...mixins: TMixins
): (locatorInfo: LocatorInfo) => UnionToIntersection<ReturnType<TMixins[number]>> {
    return function (locatorInfo: LocatorInfo) {
        const instance: any = {}

        mixins.forEach((mixinFn) => {
            const mixinInstance = mixinFn(locatorInfo)
            Object.assign(instance, mixinInstance)
        })

        return instance as UnionToIntersection<ReturnType<TMixins[number]>>
    }
}
