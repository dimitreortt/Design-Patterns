import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    constructor(readonly beverage: Beverage) {
        super()
    }

    abstract getDescription(): string
}
