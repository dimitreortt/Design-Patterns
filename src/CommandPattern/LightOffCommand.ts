import { Command } from "./Command";
import { Light } from "./Light";

export class LightOffCommand implements Command {
    constructor(readonly light: Light) {
    }
    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on()
    }
}
