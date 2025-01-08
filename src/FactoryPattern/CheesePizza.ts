import { Dough, Pizza } from "./Pizza";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";

export class CheesePizza extends Pizza {
    constructor(readonly pizzaIngredientFactory: PizzaIngredientFactory) {
        super();
    }

    prepare(): void {
        console.log("Preparing NY-style cheese pizza");
        this.dough = this.pizzaIngredientFactory.createDough()
        this.sauce = this.pizzaIngredientFactory.createSauce()
        this.cheese = this.pizzaIngredientFactory.createCheese()
    }
}
