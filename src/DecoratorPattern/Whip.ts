import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
    constructor(readonly beverage: Beverage) {
        super(beverage)
    }

    cost() {
        return this.beverage.cost() + 0.10;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Whip";
    }
}
