import { CompositeIterator } from './CompositeIterator'
import { Iterator } from './Iterator'
import { MenuComponent } from './MenuComponent'
import { MenuComponentIterator } from './MenuComponentIterator'

export class Menu extends MenuComponent {
    private menuItems: MenuComponent[] = []

    constructor(readonly name: string, readonly description: string) {
        super()
    }

    add(menuComponent: MenuComponent) {
        this.menuItems.push(menuComponent)
    }

    remove(menuComponent: MenuComponent): void {
        const index = this.menuItems.indexOf(menuComponent)
        if (index > -1) {
            this.menuItems.splice(index, 1)
        }
    }

    print() {
        console.log(`\n${this.name}, ${this.description}`)
        console.log('---------------------')
        for (const item of this.menuItems) {
            item.print()
        }
    }

    createIterator(): Iterator {
        return new CompositeIterator(new MenuComponentIterator(this.menuItems))
    }
}
