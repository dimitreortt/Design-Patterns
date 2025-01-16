import { Iterator } from "./Iterator";
import { MenuItem } from "./MenuItem";

export class DinerMenuIterator implements Iterator {
    private position: number = 0;

    constructor(private menuItems: MenuItem[]) {}
    
    hasNext(): boolean {
        return this.position < this.menuItems.length;
    }
    
    next(): MenuItem {
        const menuItem = this.menuItems[this.position];
        this.position++
        return menuItem
    }
}
