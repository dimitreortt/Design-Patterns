import { Beverage } from "./Beverage";

export class Espresso extends Beverage {
    constructor() {
        super();
    }

    cost(): number {
        return 1.99;
    }

    getDescription(): string {
        return "Espresso";
    }
}
