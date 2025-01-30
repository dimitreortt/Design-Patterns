import { Quackable } from "./Quackable";

export class RubberDuck implements Quackable {
    constructor() {
    }

    quack(): void {
        console.log('Sneak!')
    }
}
