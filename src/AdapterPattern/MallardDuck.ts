import { Duck } from "./Duck";

export class MallardDuck implements Duck {
    constructor() {
    }

    quack(): void {
        console.log('Quack!')
    }

    fly(): void {
        console.log('Im flying')
    }
}
