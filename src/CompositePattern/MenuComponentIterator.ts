import { Iterator } from "./Iterator";
import { MenuComponent } from "./MenuComponent";

export class MenuComponentIterator implements Iterator {
    private position: number = 0

    constructor(private menuComponents: MenuComponent[]) {
    }

    next() {
        const menuComponent = this.menuComponents[this.position]
        this.position++
        return menuComponent
    }

    hasNext(): boolean {
        return this.position < this.menuComponents.length;
    }
}
