import { MenuComponent } from "./MenuComponent";

export class Waitress {
    constructor(private allMenus: MenuComponent) { }

    printMenu() {
        this.allMenus.print()
    }

    printVegetarianMenu() {
        console.log('\nVEGETARIAN MENU\n----')
        const iterator = this.allMenus.createIterator();
        while (iterator.hasNext()) {
            const menuComponent = iterator.next();
            if (menuComponent.getIsVegetarian()) {
                menuComponent.print()
            }
        }
    }
}
