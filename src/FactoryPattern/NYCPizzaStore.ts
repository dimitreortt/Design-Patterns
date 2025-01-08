import { NYCPizzaIngredientFactory } from "./NYCPizzaIngredientFactory";
import { CheesePizza } from "./CheesePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";
import { PepperoniPizza } from "./PepperoniPizza";

export class NYCPizzaStore extends PizzaStore {
    constructor() {
        super();
    }

    createPizza(type: string): Pizza  {
        switch (type) {
            case 'cheese': return new CheesePizza(new NYCPizzaIngredientFactory());
            case 'pepperoni': return new PepperoniPizza(new NYCPizzaIngredientFactory());
            default: throw new Error('pizza type not supported');
        }
    }
}
