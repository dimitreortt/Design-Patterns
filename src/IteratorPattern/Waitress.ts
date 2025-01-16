import { Menu } from "./Menu";
import { Iterator } from "./Iterator";

export class Waitress {
    private menus: Menu[] = []

    constructor() { }

    addMenu(menu: Menu) {
        this.menus.push(menu)
    }

    printMenu() {
        for (const menu of this.menus) {
            this.printMenuItems(menu.createIterator())
        }
    }

    printMenuItems(iterator: Iterator) {
        while (iterator.hasNext()) {
            console.log(iterator.next())
        }
    }
}
