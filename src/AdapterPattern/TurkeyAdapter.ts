import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
    constructor(readonly turkey: Turkey) {
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
