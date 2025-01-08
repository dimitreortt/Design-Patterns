import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class NYCPizzaIngredientFactory implements PizzaIngredientFactory {
    constructor() { }

    createDough() {
        return 'ny dough'
    }

    createCheese() {
        return 'ny cheese'
    }

    createPepperoni() {
        return 'ny pepperoni'
    }

    createVeggies() {
        return ['ny eggplant', 'ny corn']
    }

    createSauce() {
        return 'ny sauce'
    }

    createClam() {
        return 'ny clam'
    }
}
