import { DinerMenuIterator } from "./DinerMenuIterator";
import { Iterator } from "./Iterator";
import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";

export class DinerMenu implements Menu {
    private menuItems: MenuItem[] = [];

    constructor() {
        this.addItem('Vegetarian BLT', '(Fakin´) Bacon with lettuce & tomato on whole wheat', true, 2.99)
        this.addItem('BLT','Bacon with lettuce & tomato on whole wheat', false, 2.99);
        this.addItem('Soup of the day', 'Soup of the day, with a side of potato salad', false, 3.29);
        this.addItem('Hotdog', 'A hot dog, with saurkraut, relish, onions, topped with cheese', false, 3.05);
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number) {
        const menuItem = new MenuItem(name, description, isVegetarian, price);
        this.menuItems.push(menuItem);
    }

    private getMenuItems(): MenuItem[] {
        return this.menuItems;
    }

    createIterator(): Iterator {
        return new DinerMenuIterator(this.getMenuItems());
    }
}
