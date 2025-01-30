import { Quackable } from "./Quackable";

export class MallardDuck implements Quackable {
    constructor() {
    }

    quack(): void {
        console.log('Quack!')
    }
}
