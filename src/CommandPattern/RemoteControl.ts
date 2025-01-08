import { Command } from "./Command";
import { NoCommand } from "./NoCommand";

export class RemoteControl {
    onCommands: Command[] = [];
    offCommands: Command[] = [];
    undoCommand: Command;

    constructor() {
        this.onCommands = Array(7).map(() => new NoCommand())
        this.offCommands = Array(7).map(() => new NoCommand())
        this.undoCommand = new NoCommand()
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    pressOnButton(slot: number) {
        this.onCommands[slot].execute()
        this.undoCommand = this.onCommands[slot]
    }

    pressOffButton(slot: number) {
        this.offCommands[slot].execute()
        this.undoCommand = this.offCommands[slot]
    }

    pressUndo() {
        this.undoCommand.undo()
    }
}
