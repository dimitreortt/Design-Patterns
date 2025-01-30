import { Goose } from "./Goose";
import { Quackable } from "./Quackable";

export class GooseDuckAdapter implements Quackable {
    constructor(readonly goose: Goose) {}
    
    quack(): void {
        this.goose.honk()
    }
}
