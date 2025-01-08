import { Command } from "./Command";

export class MacroCommand implements Command {
    constructor(readonly commands: Command[]) {}

    execute(): void {
        for (const command of this.commands) {
            command.execute();
        }
    }

    undo(): void {
        for (const command of this.commands) {
            command.undo();
        }
    }
}
