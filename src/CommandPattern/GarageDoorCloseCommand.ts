import { Command } from "./Command";
import { GarageDoor } from "./GarageDoor";

export class GarageDoorCloseCommand implements Command {
    constructor(readonly garageDoor: GarageDoor) {}

    execute(): void {
        this.garageDoor.down()
    }

    undo(): void {
        this.garageDoor.up()
    }
}
