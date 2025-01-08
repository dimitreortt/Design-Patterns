import { Command } from "./Command";
import { Light } from "./Light";

export class LightOnCommand implements Command {
    constructor(readonly light: Light) {
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}
