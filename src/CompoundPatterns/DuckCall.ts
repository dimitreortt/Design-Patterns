import { Quackable } from "./Quackable";

export class DuckCall implements Quackable {
    constructor() {
    }

    quack(): void {
        console.log('Kwak!')
    }
}
