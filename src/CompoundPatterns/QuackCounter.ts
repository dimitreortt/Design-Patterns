import { Quackable } from "./Quackable";

export class QuackCounter implements Quackable {
    public static quacks: number = 0;

    constructor(private quackable: Quackable) {}

    quack(): void {
        this.quackable.quack()
        QuackCounter.quacks++
    }
}
