import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Mocha extends CondimentDecorator {
    constructor(readonly beverage: Beverage) {
        super(beverage);
    }

    cost(): number {
        return this.beverage.cost() + 0.2;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }
}
