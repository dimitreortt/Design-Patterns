import { Turkey } from "./Turkey";

export class WildTurkey implements Turkey {
    constructor() {
    }

    gobble(): void {
        console.log('gobble gobble');
    }

    fly(): void {
        console.log('Im flying a short distance!');
    }
}
