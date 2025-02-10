import { ContextOptions,} from './types/api-context'

export class ContextBuilder {
    private contextOptions: ContextOptions

    constructor() {
        this.contextOptions = {}
    }
    public baseURL(value: string): this {
        this.contextOptions.baseURL = value
        return this
    }
}
