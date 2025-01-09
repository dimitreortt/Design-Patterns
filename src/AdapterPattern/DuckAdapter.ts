import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class DuckAdapter implements Turkey {
    constructor(readonly duck: Duck) {}

    gobble(): void {
        this.duck.quack()
    }

    fly(): void {
        this.duck.fly()
    }
}
