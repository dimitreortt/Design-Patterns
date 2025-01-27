import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class NoQuarterState implements State {
    constructor(private gumballMachine: GumballMachine) {}

    insertQuarter(): void {
        console.log('Quarter inserted')
        this.gumballMachine.setState(this.gumballMachine.hasQuarterState)
    }

    ejectQuarter(): void {
        console.log('No quarter to be ejected')
    }

    turnCrank(): void {
        console.log('Please insert quarter before turning crank')
    }

    dispense(): void {
        console.log('Please insert quarter')
    }
}
