import { CafeMenuIterator } from './CafeMenuIterator'
import { Iterator } from './Iterator'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'

export type MenuObjectListString = { [key: string]: MenuItem }

export class CafeMenu implements Menu {
    private menuItems: MenuObjectListString = {}

    constructor() {
        this.addItem(
            'Veggie Burger and Air Fries',
            'Veggie burger on a whole wheat bun, lettuce, tomato, and fries',
            true,
            3.99
        )
        this.addItem('Soup of the day', 'A cup of the soup of the day, with a side salad', false, 3.69)
        this.addItem('Burrito', 'A large burrito, with whole pinto beans, salsa, guacamole', true, 4.29)
    }

    addItem(name: string, description: string, isVegetarian: boolean, price: number) {
        const menuItem = new MenuItem(name, description, isVegetarian, price)
        this.menuItems[name] = menuItem
    }

    createIterator(): Iterator {
        return new CafeMenuIterator(this.menuItems)
    }
}
