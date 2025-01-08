import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class PepperoniPizza extends Pizza {
    constructor(readonly pizzaIngredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log("Preparing NYC-style pepperoni pizza");
        this.dough = this.pizzaIngredientFactory.createDough()
        this.sauce = this.pizzaIngredientFactory.createSauce()
        this.pepperoni = this.pizzaIngredientFactory.createPepperoni()
    }
}
