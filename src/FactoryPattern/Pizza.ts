import { PizzaIngredientFactory } from "./PizzaIngredientFactory"

export interface Dough {}
export interface Clam {}
export interface Pepperoni {}
export interface Cheese {}
export interface Veggie {}
export interface Sauce {}

export abstract class Pizza {
    dough?: Dough
    clam?: Clam
    pepperoni?: Pepperoni
    cheese?: Cheese
    veggies?: Veggie[]
    sauce?: Sauce
    
    abstract pizzaIngredientFactory: PizzaIngredientFactory
    abstract prepare(): void

    bake() {
        console.log('bake pizza')
    }

    cut() {
        console.log('cut pizza')
    }

    box() {
        console.log('box pizza')
    }
}
