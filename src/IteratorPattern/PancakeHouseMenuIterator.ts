import { Iterator } from "./Iterator";
import { MenuObjectList } from "./PancakeHouseMenu";

export class PancakeHouseMenuIterator implements Iterator {
    private position = 0

    constructor(private menuItems: MenuObjectList) {
    }

    next() {
        const menuItem = this.menuItems[this.position];
        this.position += 1;
        return menuItem;
    }

    hasNext(): boolean {
        return !!this.menuItems[this.position]
    }
}
