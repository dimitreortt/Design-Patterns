import { Command } from "./Command";

export class NoCommand implements Command {
    constructor() {
    }
    
    execute(): void {
        // console.log("No command executed");
    }

    undo(): void {}
}
