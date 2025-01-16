import { MenuObjectListString } from "./CafeMenu";
import { Iterator } from "./Iterator";

export class CafeMenuIterator implements Iterator {
    private position = 0

    constructor(private menuItems: MenuObjectListString) {
    }

    next() {
        const menuItem = Object.values(this.menuItems)[this.position]
        this.position++
        return menuItem
    }

    hasNext(): boolean {
        return this.position < Object.keys(this.menuItems).length
    }
}
