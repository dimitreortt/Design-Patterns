import { Cheese, Clam, Dough, Pepperoni, Sauce, Veggie } from "./Pizza"

export interface PizzaIngredientFactory {
    createDough(): Dough
    createCheese(): Cheese
    createPepperoni(): Pepperoni
    createVeggies(): Veggie[]
    createSauce(): Sauce
    createClam(): Clam
}
