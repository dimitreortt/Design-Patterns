import { Iterator } from './Iterator'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { PancakeHouseMenuIterator } from './PancakeHouseMenuIterator'

export type MenuObjectList = { [key: number]: MenuItem }

export class PancakeHouseMenu implements Menu {
    private menuItems: MenuObjectList = {}

    constructor() {
        this.addItem('K&B´s Pancake Breakfast', 'Pancakes with scrambled eggs, and toast', true, 2.99)
        this.addItem('Regular Pancake Breakfast', 'Pancakes with fried eggs, sausage', false, 2.99)
        this.addItem('Blueberry Pancakes', 'Pancakes made with fresh blueberries', true, 3.49)
        this.addItem('Waffles', 'Waffles, with your choice of blueberries or strawberries', true, 3.59)
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number) {
        const menuItem = new MenuItem(name, description, isVegetarian, price)
        this.menuItems[Object.keys(this.menuItems).length] = menuItem
    }
    
    private getMenuItems(): MenuObjectList {
        return this.menuItems
    }

    createIterator(): Iterator {
        return new PancakeHouseMenuIterator(this.menuItems)
    }
}
