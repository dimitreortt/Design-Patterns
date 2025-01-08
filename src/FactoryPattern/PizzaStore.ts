import { Pizza } from "./Pizza";

export abstract class PizzaStore {
    constructor() { }

    orderPizza(type: string) {
        const pizza = this.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
    }

    abstract createPizza(type: string): Pizza
}