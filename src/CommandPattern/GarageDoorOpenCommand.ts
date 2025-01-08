import { Command } from "./Command";
import { GarageDoor } from "./GarageDoor";

export class GarageDoorOpenCommand implements Command {
    constructor(readonly garageDoor: GarageDoor) {}

    execute(): void {
        this.garageDoor.up()
    }

    undo(): void {
        this.garageDoor.down()
    }
}
