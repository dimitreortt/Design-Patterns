import { Iterator } from "./Iterator"

export abstract class MenuComponent {
    constructor() {}

    add(menuComponent: MenuComponent): void {
        throw new Error('UnsupportedOperationException()')
    }
    remove(menuComponent: MenuComponent): void {
        throw new Error('UnsupportedOperationException()')
    }
    getChild(i: number): MenuComponent {
        throw new Error('UnsupportedOperationException()')
    }

    getName(): String {
        throw new Error('UnsupportedOperationException()')
    }
    getDescription(): String {
        throw new Error('UnsupportedOperationException()')
    }
    getPrice(): number {
        throw new Error('UnsupportedOperationException()')
    }
    getIsVegetarian(): boolean {
        throw new Error('UnsupportedOperationException()')
    }

    print(): void {
        throw new Error('UnsupportedOperationException()')
    }

    createIterator(): Iterator {
        throw new Error('UnsupportedOperationException()')
    }
}
