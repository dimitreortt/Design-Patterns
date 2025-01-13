import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    constructor() {
        super();
    }

    addCondiments(): void {
        console.log('Adding lemon')
    }

    brew(): void {
        console.log('Steeping the tea')
    }
}
