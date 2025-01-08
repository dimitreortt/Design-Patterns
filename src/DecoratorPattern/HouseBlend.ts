import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {
    constructor() {
        super()
    }

    cost(): number {
        // This is a placeholder for the actual cost calculation
        return 0.6
    }

    getDescription(): string {
        return "House Blend Coffee"
    }
}
