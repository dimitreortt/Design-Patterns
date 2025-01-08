import { Command } from "./Command";
import { Stereo } from "./Stereo";

export class StereoOffComand implements Command {
    constructor(readonly stereo: Stereo) {
    }

    execute(): void {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on()
    }
}
