import { MenuComponent } from "./MenuComponent"

export interface Iterator {
    next(): any
    hasNext(): boolean
}

export interface MenuComponentIterator extends Iterator {
    next(): MenuComponent
    hasNext(): boolean
}
