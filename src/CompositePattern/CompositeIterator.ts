import { Iterator } from "./Iterator";
import { MenuComponent } from "./MenuComponent";
import { Menu } from "./Menu";

export class CompositeIterator implements Iterator {
    stack: Iterator[] = []

    constructor(iterator: Iterator) {
        this.stack.push(iterator)
    }

    next(): MenuComponent {
        const peek = this.stack[this.stack.length - 1]
        const next = peek.next()
        if (next instanceof Menu) {
            this.stack.push(next.createIterator())
            return this.next()
        }
        return next
    }

    hasNext(): boolean {
        if (this.stack.length === 0) {
            return false
        }
        const peek: Iterator = this.stack[this.stack.length - 1]
        if (!peek.hasNext()) {
            this.stack.pop()
            return this.hasNext()
        }
        return true
    }
}
