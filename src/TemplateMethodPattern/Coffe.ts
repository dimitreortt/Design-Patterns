import { CaffeineBeverage } from "./CaffeineBeverage";

export class Coffe extends CaffeineBeverage {
    constructor() {
        super();
    }

    brew(): void {
        console.log("Dripping coffee through filter");
    }

    addCondiments(): void {
        console.log("Adding cream and sugar");
    }
}
