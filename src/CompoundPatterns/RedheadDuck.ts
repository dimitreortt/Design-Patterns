import { Quackable } from "./Quackable";

export class RedHeadDuck implements Quackable {
    constructor() {}

    quack(): void {
        console.log('Quack!')
    }
}
