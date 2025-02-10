import { ARIARole } from 'aria-query'

export type FindBy =
    | ({ css: string } & ExclusiveKey<'css'>) & { nth?: number }
    | ({ xpath: string } & ExclusiveKey<'xpath'>) & { nth?: number }
    | ({ id: string } & ExclusiveKey<'id'>) & { nth?: number }
    | ({ text: string } & ExclusiveKey<'text'>) & { nth?: number }
    | ({ name: string } & ExclusiveKey<'name'>) & { nth?: number }
    | ({ label: string } & ExclusiveKey<'label'>) & { nth?: number }
    | ({ testId: string } & ExclusiveKey<'testId'>) & { nth?: number }
    | ({ role: FindByRole } & ExclusiveKey<'role'>) & { nth?: number }

type ExclusiveKey<Key extends string> = {
    [K in Exclude<'css' | 'xpath' | 'id' | 'text' | 'name' | 'label' | 'testId' | 'role', Key>]?: never
}

export type FindByRole = {
    role: ARIARole
    options?: RoleOptions
}

export type RoleOptions = {
    checked?: boolean
    disabled?: boolean
    exact?: boolean
    expanded?: boolean
    includeHidden?: boolean
    level?: number
    name?: string | RegExp
    pressed?: boolean
    selected?: boolean
}
