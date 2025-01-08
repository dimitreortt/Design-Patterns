import { Command } from "./Command";

export class SimpleRemoteControl {
    private slot?: Command

    constructor() { }

    setCommand(slot: Command) {
        this.slot = slot
    }

    buttonWasPressed() {
        this.slot?.execute()
    }
}
