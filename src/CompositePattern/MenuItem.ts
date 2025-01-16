import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
    constructor(readonly name: string, readonly description: string, readonly isVegetarian: boolean, readonly price: number) {
        super()
    }

    print(): void {
        let str = this.name
        if (this.isVegetarian) {
            str += " (V)"
        }
        str += ` - ${this.description} - $${this.price}`;
        console.log(str)
    }

    getIsVegetarian(): boolean {
        return this.isVegetarian
    }
}
